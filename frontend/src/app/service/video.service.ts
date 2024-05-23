import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  url: string = 'http://localhost:3000/api/v1/video';

  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get<Video[]>(this.url);
  }

  createdVideo(video: Video) {
    return this.http.post<Video>(this.url, video);
  }

  updateVideo(video: Video) {
    return this.http.put<Video>(this.url + '/' + video._id, video);
  }

  deleteVideo(video: Video) {
    return this.http.delete<Video>(this.url + '/' + video._id);
  }
}
