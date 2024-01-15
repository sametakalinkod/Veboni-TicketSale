import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminEndPoints } from 'src/environments/adminEndPoints';
import { ActionResponse } from '../../models/ActionResponse';
import { HttpService } from '../auth/Http.service';
import { PaymentDetailDto } from 'src/app/modules/admin/basket/models/PaymentDetailDto';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private _httpService: HttpService
  ) { }


  getBankFromCardNumber(model: any): Observable<ActionResponse<string>> {
    return this._httpService.post(adminEndPoints.payment.getBankFromCardNumber, model);
  }
  getPaymentDetail(model: any): Observable<ActionResponse<PaymentDetailDto>> {
    return this._httpService.post(adminEndPoints.payment.getPaymentDetail, model);
  }


  payECollectionLink(model: any): Observable<ActionResponse<string>> {
    return this._httpService.post(adminEndPoints.payment.payECollectionLink, model);
  }
}
