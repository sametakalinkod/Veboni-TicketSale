import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum';
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { BinDto } from './models/BinDto';
import { PaymentService } from 'src/app/core/services/payment/payment.service';
import { GetInstallmentOptionsDto } from './models/GetInstallmentOptionsDto';
import { ActionResponse } from 'src/app/core/models/ActionResponse';
import { ECollectionReviewDto } from './models/ECollectionReviewDto';
import { PaymentDetailDto } from './models/PaymentDetailDto';
import { PayECollectionDto } from './models/PayECollectionDto';
import { formatDate } from '@angular/common';
import { CreditCardDto } from './models/CreditCardDto';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/core/services/global/cookie.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  animations: [
    trigger(
      'flyOut',
      [
        transition(
          ':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))
        ]
        ),
        transition(
          ':leave', [
          style({ transform: 'translateX(0)', 'opacity': 1 }),
          animate('500ms', style({ transform: 'translateX(-100%)', 'opacity': 0 })),
        ]
        )
      ]
      // [
      //   transition(
      //     ':enter', [
      //     style({ transform: 'translateX(100%)', opacity: 0 }),
      //     animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))
      //   ]
      //   ),
      //   transition(
      //     ':leave', [
      //     style({ transform: 'translateX(0)', 'opacity': 1 }),
      //     animate('500ms', style({ transform: 'translateX(-100%)', 'opacity': 0 })),

      //   ]
      //   )]
    )
  ],
})

export class BasketComponent implements OnInit {
  paymentProcess: boolean = false;
  paymentForm!: FormGroup;
  yearSelectBox: string[] = [];
  monthSelectBox: string[] = [];
  cardBankName: string | null = null;
  bin: BinDto | null = null;
  tenantId: string | null = '5fbfb39a-7fd3-47ff-80cc-bdd3bceb7718';
  selectedPayOption: string = '2';
  installments!: { [key: number]: number };
  newInstallment: { index: number, value: { [key: number]: number } }[] = [];
  selectedECollections: ECollectionReviewDto = new ECollectionReviewDto();
  totalPrice: number = 0;
  paymentLink!: string;
  selectedValue: string = '1';
  basketItems: any[] = [];
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6]; // Define array of quantity options

  constructor(
    private _formBuilder: FormBuilder,
    //private _translocoService: TranslocoService,
    private _paymentService: PaymentService,
    private _router: Router,
    private _cookieService: CookieService
  ) { }

  ngOnInit(): void {
    const data = this._cookieService.getCookie('basketEvents');

    if (JSON.parse(data ?? '').length > 0) {
      this.basketItems = JSON.parse(data ?? '');

    }
    this._cookieService.subscribeToCookieChanges().subscribe((newCookieValue: string) => {
      // Handle the event in the header component

      this.updateHeader(newCookieValue);
    });

    this.paymentForm = this._formBuilder.group({
      name: ['Samet'],
      lastname: ['Akalin'],
      adress: ['Akedeniz uni teknokent'],
      email: ['samet.akalin@kod.com.tr'],
      phone: ['5000000000'],
      savenexttime: [true],
      cardname: ['Samet Akalın ', Validators.required],
      cardnumber: ['6501617086510197', Validators.required],
      month: ['02'],
      year: ['2029'],
      cvc: ['609']
    });



    const yearNow = new Date().getFullYear();
    for (let index = 1; index < 13; index++) {
      var month: string = index.toString();
      if (index < 10)
        month = `0${index}`;
      const element = yearNow + index;
      this.yearSelectBox.push(element.toString());
      this.monthSelectBox.push(month);
    }
  }

  paymentProcessContinue(): void {

    if (!this.paymentForm.valid && this.paymentProcess) {
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.error'),
        'Lutfen Zorunlu Alanları Kontrol Ediniz!',
        SweetalertType.error
      );
      GlobalService.sweetAlert(sweetAlertDto);
      return;
    }

    if (this.paymentProcess) {
      this.makePayment();
    }
    this.paymentProcess = true;
  }

  onValueChangeCvv(e: any): void {
    if (e.data) {
      const inputVal = e.target.value.replace(/\D/g, '');

      this.paymentForm.get('cvc')?.setValue(inputVal);
    }
  }

  translate(key: string): any {
    //return this._translocoService.translate(key);
  }


  onValueChangeCreditCard(e: any): void {
    const value = (this.paymentForm?.value.cardnumber).toString();
    if (value.length < 6) {
      this.cardBankName = null;
    }
    let check: boolean = false;
    if (value) {
      this.bin = null;
      const validRegex = /^[0-9]{16}$/;
      check = validRegex.test(value);
      if (value.length === 6) {
        this.getBankFromCardNumber();
      }
    }
    if (check) {
      this.getInstallmentOptions();
    }
  }
  getBankFromCardNumber(): void {
    const model = {
      bin: this.paymentForm?.value.cardnumber.toString(),
      tenantId: this.tenantId
    };

    this._paymentService.getBankFromCardNumber(model).subscribe((response: ActionResponse<string>) => {
      if (response.isSuccessful) {
        this.cardBankName = response.data;
      } else {
        this.cardBankName = null;
      }
    });
  }

  getInstallmentOptions(): void {
    const amountType = Number(this.selectedPayOption);
    const installmentoptionmodel = new GetInstallmentOptionsDto(
      this.paymentForm?.value?.cardnumber.toString(),
      this.selectedECollections.propertyId,
      this.totalPrice,
      this.selectedECollections.selectedVirtualPosId,
      null,
      this.tenantId,
      amountType
    );
    this._paymentService.getPaymentDetail(installmentoptionmodel).subscribe((response: ActionResponse<PaymentDetailDto>) => {
      if (response.isSuccessful) {
        this.bin = response.data.bin;
        if (response.data.installmentTables && response.data.installmentTables.length > 0) {
          this.installments = response.data.installmentTables[0].installments;

          this.newInstallment = Object.entries(this.installments).map(([key, value], index) => ({
            index,
            value: { key: +key, value }
          }));
        } else {
          this.installments =
            { 1: this.selectedECollections.amount }
            ;
          this.newInstallment = Object.entries(this.installments).map(([key, value], index) => ({
            index,
            value: { key: +key, value }
          }));
        }
      } else {
      }
    });
  }

  makePayment(): void {
    const firstPart = this.paymentForm?.value?.month.toString();
    const secondPart = this.paymentForm?.value?.year.toString().substring(2);
    const dateNow = formatDate(new Date(), 'MM-yyyy', 'en-US');
    const monthNow = dateNow.substring(0, 2);
    const yearNow = dateNow.substring(5, 7);
    if (Number(yearNow) === Number(secondPart)) {
      if (Number(monthNow) > Number(firstPart)) {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('sweetalert.error'),
          'Son Kullanma Tarihini Kontrol Edin!',
          SweetalertType.error
        );
        GlobalService.sweetAlert(sweetAlertDto);
        return;
      }
    } else if (Number(yearNow) > Number(secondPart)) {
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.error'),
        'Son Kullanma Tarihini Kontrol Edin!',
        SweetalertType.error
      );
      GlobalService.sweetAlert(sweetAlertDto);
      return;
    }

    const craditCard = new CreditCardDto(
      this.paymentForm?.value?.cardname.toString(),
      this.paymentForm?.value?.cardnumber.toString(),
      firstPart,
      secondPart,
      this.paymentForm?.value?.cvc.toString(),
      this.bin ? this.bin.organization : null
    );
    const paymentModel = new PayECollectionDto(
      craditCard,
      2250,//this.selectedECollections.amount,
      'TRY',//this.selectedECollections.code,
      this.bin?.alias ?? '',
      '1',
      this.selectedECollections.selectedVirtualPosId,
      '59e67dc5-4729-43fb-9f4d-0c4361019972',//this.selectedECollections.recId,
      '9ce469ff-da71-4132-af4a-96868794ebfa',//this.selectedECollections.propertyId,
      '5fbfb39a-7fd3-47ff-80cc-bdd3bceb7718',//this.tenantId,
      true,
      '',//this.tokenInfo?.UserName ?? this.selectedECollections.eMail,
      '',//this.tokenInfo?.ContactEmail ?? this.selectedECollections.eMail,
      2250//(this.selectedPayOption === '2') ? this.installments[this.selectedInstallment] : this.selectedECollections.amount,
    );


    this._paymentService.payECollectionLink(paymentModel).subscribe((response: ActionResponse<string>) => {
      if (response.isSuccessful) {
        this.paymentLink = response.data;
        const tempContainer = document.getElementById('paymentForm');
        if (tempContainer) {
          tempContainer.innerHTML = this.paymentLink as string;
        }

        const paymentForm = tempContainer?.querySelector('#PaymentForm') as HTMLFormElement;

        if (paymentForm && paymentForm.isConnected) {
          paymentForm.submit();
        } else {
          console.error('PaymentForm element not found.');
        }
      } else {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('payments.payfailrestitle'),
          this.translate('payments.payfailresremark'),
          SweetalertType.error
        );
        GlobalService.sweetAlert(sweetAlertDto);
      }
    });
  }
  onQuantityChange(selectedValue: any, sessionId: string): void {
    debugger
    this.basketItems.find(x => x.sessionId === sessionId).adultCount = selectedValue;
  }
  calculateTotalPrice(percentage?: number): number {
    this.basketItems.forEach(item => {
      const adultCount = parseInt(item.adultCount, 10);
      const totalPrice = (adultCount * item.adultPrice);
      item.totalPrice = totalPrice;
    });
    let grandTotal = this.basketItems.reduce((total, item) => total + item.totalPrice, 0);
    if (percentage) {
      grandTotal = grandTotal * percentage / 100;
    }

    return grandTotal;

    //return totalPrice * parseInt(this.selectedValue, 10);
  }

  removeItem(recId: string) {
    const index = this.basketItems.findIndex(item => item.sessionId === recId);

    if (index !== -1) {
      this.basketItems.splice(index, 1);

      this._cookieService.setCookie('basketEvents', JSON.stringify(this.basketItems), 7);

      if (this.basketItems.length === 0) {
        this._router.navigate(['/home']);
      } else {
        const sweetAlertDto = new SweetAlertDto(
          'Ürün Kaldırıldı!',
          '',
          SweetalertType.success
        );
        GlobalService.sweetAlert(sweetAlertDto);
      }
    }
  }


  updateHeader(newCookieValue: string): void {
    // Your logic to update the header
    console.log('Header updated with new cookie value:', newCookieValue);
  }

  formatTime(time: string): string {
    const [hoursStr, minutesStr] = time.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    const formattedHours = hours < 10 ? '0' + hours : hours.toString();
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    return `${formattedHours}:${formattedMinutes}`;
  }


}
