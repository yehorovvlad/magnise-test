import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any;
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.data = this.dataService.getData().subscribe(data => {
      console.log(data);
    });
  }
}
