import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('cosmosDance_video_player') videoPlayer: ElementRef | undefined;
  pauseMainPageVid: boolean = true;
  videoMuted: boolean = true;
  constructor() { }

  ngOnInit() {
  }


  handleClick(): void {
    this.videoMuted = !this.videoMuted;
  }

  onHoverMethod(value: boolean): void {
    this.pauseMainPageVid = value;
    console.log('Hovered!');
    var dance_video = document.getElementById("cosmosDance_video_player") as HTMLVideoElement;

    if (dance_video && value) {
      dance_video.play();
    } else if (dance_video) {
      dance_video.pause();
    }
  }

}
