import { Component, OnInit } from '@angular/core';
import {RecordService} from '../record.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data = []

  constructor(private myFirstService : RecordService) { }

  ngOnInit() {
    this.myFirstService.getData().subscribe(record =>{
      this.data = record.obj
    })
  }

}
