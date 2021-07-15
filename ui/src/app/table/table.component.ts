import { Component, OnInit } from '@angular/core';
import { HorseService } from '../horse.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  columnDefs = [
    { field: 'name' },
    { field: 'colour' },
    { field: 'breed'},
    { field: 'speed' }
  ];

  rowData = [];

  constructor(private service: HorseService) { 
    this.service.getHorses().subscribe((data: any) => {
      this.rowData = data
      console.log(data)
    });
  }
}
