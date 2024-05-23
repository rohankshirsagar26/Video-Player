import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[] = [];
  @Output() emitVideoDetails = new EventEmitter<Video>();

  constructor() {}

  ngOnInit(): void {}

  onVideoClick(video: Video) {
    this.emitVideoDetails.emit(video);
  }
}
