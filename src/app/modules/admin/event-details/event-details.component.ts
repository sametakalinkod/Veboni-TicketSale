import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  selectedRecId: string | null = '';
  constructor(
    private _route: ActivatedRoute,

  ) { }


  ngOnInit() {
    this._route.paramMap.subscribe((paramMap) => {
      console.log(paramMap);
      if (paramMap.has('id')) {
        const guids = paramMap.get('id');
        this.selectedRecId = guids ? atob(guids) : null;
      }
    });
  }

}
