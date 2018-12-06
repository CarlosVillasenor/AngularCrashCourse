import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: `./FirstComponent.html`,
    styleUrls: ['./FirstComponent.css']
})

export class HelloWorld {
    title = 'Welcome to Angular';
}
