import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.css'],
})
export class CreateVideoComponent implements OnInit {
  constructor(private videoService: VideoService, private router: Router) {}

  ngOnInit(): void {}

  video: Video = new Video('', '', '', '');

  onFormSubmit(formData: NgForm) {
    this.videoService
      .createdVideo(this.video)
      .subscribe(() => this.router.navigate(['/videos']));
  }
}
