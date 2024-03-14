import { Component, Input, OnInit } from '@angular/core';
import { PmsExtraProgramDefinitionsDto } from 'src/app/common/models/PmsExtraProgramDefinitionsDto';

@Component({
  selector: 'app-event-main-res-exstras',
  templateUrl: './event-main-res-exstras.component.html',
  styleUrls: ['./event-main-res-exstras.component.scss']
})
export class EventMainResExstrasComponent implements OnInit {
  @Input() exstraServices: PmsExtraProgramDefinitionsDto[] | null = null;

  constructor() { }

  ngOnInit() {
    // const htmlList = JSON.parse(this.selectedProductSessions.htmlList ?? '');
    // if (htmlList) {
    //   const model = {
    //     urls: new Array<HtmlReadDto>()
    //   };
    //   htmlList.forEach((item: any) => {
    //     const x = new HtmlReadDto();
    //     let decodedUrl = decodeURIComponent(item);
    //     decodedUrl = decodedUrl.replaceAll('\\', '/');
    //     const path = decodedUrl.split('/');
    //     const getLangCode = path[6].split('=');
    //     const langCode = getLangCode[2].split('.')[0];
    //     x.container = path[3];
    //     x.folder = path[5];
    //     x.langCode = langCode;
    //     x.filename = path[6];
    //     model.urls.push(x);
    //   });

    //   this._commonService.readHtml(model).subscribe((responseHtml) => {
    //     if (responseHtml.isSuccessful) {
    //       if (responseHtml.data.length > 0) {
    //         this.htmlEditorDto = responseHtml.data;
    //         this.htmlEditorDto.forEach((item) => {
    //           responseHtml.data.forEach((element: any) => {
    //             if (item.shortName === element.shortName) {
    //               item.value = element.value;
    //             }
    //           });
    //         });
    //       }

    //       this.htmlEditorValue = this.htmlEditorDto.find(x => x.shortName === this.language)?.value ?? '';
    //     }
    //   });
    // }
  }
}
