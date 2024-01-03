import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoMuted: boolean = true;
  constructor() { }

  ngOnInit() {
  }


  handleClick(): void {
    this.videoMuted = !this.videoMuted;
  }

}
