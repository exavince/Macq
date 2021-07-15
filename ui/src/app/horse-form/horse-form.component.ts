import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-horse-form',
  templateUrl: './horse-form.component.html',
  styleUrls: ['./horse-form.component.scss']
})
export class HorseFormComponent {
  
  colors = [
    { id: 1, name:'Red' },
    { id: 2, name:'Blue' },
    { id: 3, name:'Green' },
    { id: 4, name:'Purple' },
    { id: 5, name:'White' },
    { id: 6, name:'Yellow' },
    { id: 7, name:'Orange' },
    { id: 8, name:'Brown' },
  ]

  name:any;
  breed:any;
  speed:any;
  colour:any;
  image:any;

  constructor(private http:HttpClient) { }

  submit(f:NgForm) {
    console.log(f.value);
    fetch("/api/horses", {
      method: 'POST',
      headers:{ 'Content-Type': 'application/json' },
      body: JSON.stringify(f.value)
    })
  }
}
