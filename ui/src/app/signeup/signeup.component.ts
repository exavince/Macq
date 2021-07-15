import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signeup',
  templateUrl: './signeup.component.html',
  styleUrls: ['./signeup.component.scss']
})
export class SigneupComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(
      '', 
      [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        UsernameValidators.cannotContainSpace], 
      UsernameValidators.shouldBeUnique),
    password: new FormControl(
      '',
      [Validators.required]
    )
  });

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('username');
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
