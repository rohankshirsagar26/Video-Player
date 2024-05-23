import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
})
export class VideoDetailComponent implements OnInit, OnChanges {
  @Input() video!: Video;
  @Output() updateEvent = new EventEmitter<Video>();
  @Output() deleteEvent = new EventEmitter<Video>();
  editTitle: boolean = false;

  constructor(private videoService: VideoService, private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  onUpdate() {
    this.updateEvent.emit(this.video);
  }

  onDelete() {
    this.deleteEvent.emit(this.video);
  }
}
