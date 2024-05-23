import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
})
export class VideoCenterComponent implements OnInit {
  videos: Video[] = [];
  video!: Video | null;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }

  onUpdate(video: Video) {
    this.videoService.updateVideo(video).subscribe((data) => {
      this.video = null;
    });
  }

  onDelete(video: Video) {
    this.videoService.deleteVideo(video).subscribe((data) => {
      for (let i = 0; i < this.videos.length; i++) {
        if (this.videos[i]._id === data._id) {
          this.videos.splice(i, 1);
        }
      }
    });
    this.video = null;
  }
}
