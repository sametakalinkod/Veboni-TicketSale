import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HtmlReadDto } from 'src/app/common/models/HtmlReadDto';
import { PmsProductSessionsByIdDto } from 'src/app/common/models/PmsProductSessionsByIdDto';
import { PmsSalesForecastReportDto } from 'src/app/common/models/PmsSalesForecastReportDto';
import { LanguageListDto } from 'src/app/common/models/languageListDto';
import { CommonService } from 'src/app/core/services/common/Common.service';
import { ProductsService } from 'src/app/core/services/products/Products.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  selectedRecId: string | null = '';
  selectedProductSessions: PmsProductSessionsByIdDto = new PmsProductSessionsByIdDto();
  htmlEditorDto: LanguageListDto[] = [];
  htmlEditorValue: string = '';
  language: string = 'en';
  image: string = '';
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductsService,
    private _commonService: CommonService

  ) { }


  ngOnInit() {
    this._route.paramMap.subscribe((paramMap) => {
      console.log(paramMap);

      if (paramMap.has('id')) {
        const guids = paramMap.get('id');
        this.selectedRecId = guids ? atob(guids) : null;
        this.getSessionWithId(this.selectedRecId);
      }
    });
  }
  isGuid(input: string | null): boolean {
    const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return input ? guidRegex.test(input) : false;
  }

  getSessionWithId(tenant: string | null): void {
    if (!this.isGuid(tenant)) {
      return;
    }
    const recId = {
      productSessionId: tenant
    };
    this._productService.getSessionWithId(recId).subscribe((response) => {
      if (response.isSuccessful) {
        this.selectedProductSessions = response.data;
        this.image = this.selectedProductSessions.imageList[0];
        const htmlList = JSON.parse(this.selectedProductSessions.htmlList ?? '');
        if (htmlList) {
          const model = {
            urls: new Array<HtmlReadDto>()
          };
          htmlList.forEach((item: any) => {
            const x = new HtmlReadDto();
            let decodedUrl = decodeURIComponent(item);
            decodedUrl = decodedUrl.replaceAll('\\', '/');
            const path = decodedUrl.split('/');
            const getLangCode = path[6].split('=');
            const langCode = getLangCode[2].split('.')[0];
            x.container = path[3];
            x.folder = path[5];
            x.langCode = langCode;
            x.filename = path[6];
            model.urls.push(x);
          });

          this._commonService.readHtml(model).subscribe((responseHtml) => {
            if (responseHtml.isSuccessful) {
              if (responseHtml.data.length > 0) {
                this.htmlEditorDto = responseHtml.data;
                this.htmlEditorDto.forEach((item) => {
                  responseHtml.data.forEach((element: any) => {
                    if (item.shortName === element.shortName) {
                      item.value = element.value;
                    }
                  });
                });
              }

              this.htmlEditorValue = this.htmlEditorDto.find(x => x.shortName === this.language)?.value ?? '';
            }
          });
        }

      } else {
      }
    });
  }

}
