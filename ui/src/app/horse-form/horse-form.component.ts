import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-horse-form',
  templateUrl: './horse-form.component.html',
  styleUrls: ['./horse-form.component.scss']
})
export class HorseFormComponent implements OnInit {
  
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

  constructor() { }

  submit(f:any) {
    console.log(f.value);
  }


  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  ngOnInit(): void {
  }

  onSubmit(form:any) {
    console.log(form.value)
  }
}
