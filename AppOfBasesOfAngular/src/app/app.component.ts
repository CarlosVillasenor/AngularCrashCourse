import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'myFirstApp';
  users = ['Max', 'Carlos', 'Roy'];
  activated: boolean = true;
  name: string = 'Rayn Ray';
  age: number;
  address: {
    street: string;
    city: string;
  };
  // hobbies will be an array of strings
  hobbies: string[];

  bindingName: string = 'Carlo';
  bindingAge: number = 27;

  /* constructor() {
    
  } */

  posts = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
      console.log(data);
    });

    this.age = 28;
    this.address = {
      street: '221B Baker Street',
      city: 'London'
    };
    this.hobbies = ['swimming', 'read', 'walk'];

  }

  moreUsers: string[] = ['ryan', 'joe', 'cameron'];

  // Methods 

  sayHello() {
    alert('Hello!');
  }

  addUser(newUser) {
    console.log(newUser.value);
    this.moreUsers.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

  deleteUser(user) {
    // this.moreUsers = [];
    for (let i = 0; i < this.moreUsers.length; i++) {
      if (user === this.moreUsers[i]) {
        this.moreUsers.splice(i, 1);
      }
    }
  }

}