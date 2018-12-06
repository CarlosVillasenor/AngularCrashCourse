import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  posts = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
      console.log("from data: ");
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
