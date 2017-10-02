import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  private url = "https://www.reddit.com/reddits.json";

  getApplications() {
      return this.http
      .get(this.url);        
  }
}
