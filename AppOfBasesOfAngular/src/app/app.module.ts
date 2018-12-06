import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// this import allow us to  use doble Data Binding in our app
import { FormsModule } from '@angular/forms';
// this import allow us to make petitions to other servers
import { HttpClientModule } from '@angular/common/http';
// this import allow us routing in our app
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './FirstComponent/FirstComponent';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
// Import our services
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';

const routes: Route[] = [
  { path: '', component: HolaMundoComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaMundoComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(routes),
    // Route
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
