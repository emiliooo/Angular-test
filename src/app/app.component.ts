import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { SortTitlePipe } from '../app/sort-title.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  someArrayOfThings: any;
  p = 1;
  collection: any[] = this.someArrayOfThings;

  constructor(private getdata: AppService) { }

  photos: any;

  ngOnInit() {
    this.getdata.getData().subscribe(res => { this.photos = res; });
  }



