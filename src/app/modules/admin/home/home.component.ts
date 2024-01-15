import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  onSlideChange($event: Event) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('cosmosDance_video_player') videoPlayer: ElementRef | undefined;
  pauseMainPageVid: boolean = true;
  videoMuted: boolean = true;


  //loop static
  staticCount = 20;
  slidesEx: any;


  constructor(
    private _router: Router,
  ) { }

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


  openSelectedEventDetails(selectedEvent: string): void {
    const encodedGuid = btoa(selectedEvent);

    const url = this._router.serializeUrl(
      this._router.createUrlTree([`/eventdetails/${encodedGuid}`])
    );
    //open different page
    // window.open(url, '_blank');
    window.location.href = url;
  }

}
