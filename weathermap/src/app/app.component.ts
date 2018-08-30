import { Component } from '@angular/core';
import {UsersService} from "./weather.service";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weathermap';
  user: User;
  userUpdated: User;

  constructor(
    public WeatherService: WeatherService
  ) {
    this.user = {
      "id": "5a5129dea733f0612ed6ff76",
      "index": 19,
      "guid": "16611839-4899-4471-a4d5-fc1b73b67684",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Sims Mathis",
      "gender": "male",
      "company": "XPLOR",
      "email": "simsmathis@xplor.com",
      "phone": "+1 (862) 463-3660"
    }

    this.userUpdated = {
      "id": "5a5129dea733f0612ed6ff76",
      "index": 19,
      "guid": "16611839-4899-4471-a4d5-fc1b73b67684",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Sims Mathis",
      "gender": "male",
      "company": "XPLOR",
      "email": "simsmathis@xplor.com",
      "phone": "+1 (862) 463-3660"
    }
  }

  getUsers() {
    this.WeatherService.getUsers().subscribe(data => {
      console.log(data);
    })
  }

  getUser(id) {
    this.WeatherService.getUser(id).subscribe(data => {
      console.log(data);
    })
  }

  addUser() {
    this.WeatherService.addUser(this.user).subscribe(data => {
      console.log(data);
    })
  }

  updateUser() {
    this.WeatherService.updateUser(this.userUpdated).subscribe(data => {
      console.log(data);
    })
  }

  deleteUser(id) {
    this.WeatherService.deleteUser(id).subscribe(data => {
      console.log(data);
    })
  }
}
