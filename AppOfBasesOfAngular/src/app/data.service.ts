import { Injectable } from '@angular/core';
// Iron Ajax equivalent
import { HttpClient } from '@angular/common/http';
// our interface
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('service is working!');
  }

  getData(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
