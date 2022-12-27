import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GifInterface } from '../interface/gif-interface';
@Injectable({
  providedIn: 'root',
})
export class GifCrudService {
  constructor(private http: HttpClient) {}
  getGigs(): Observable<GifInterface []> {
    return this.http.get<GifInterface []>(
      'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=2007'
    );
  }

  saveGif(data:GifInterface):Observable<GifInterface >{
    return this.http.post<GifInterface>(
      'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/',data
    )
  }

  deleteGif(data:GifInterface):Observable<any>{
    return this.http.delete('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/',{body:data})
  }
}
