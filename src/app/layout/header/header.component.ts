import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  videoMuted: boolean = true;
  constructor() { }

  ngOnInit() {
  }


  handleClick(): void {
    this.videoMuted = !this.videoMuted;
  }


}
