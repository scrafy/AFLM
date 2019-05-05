import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.scss']
})
export class PageErrorComponent implements OnInit {

  title: string = "Opps...";


  constructor(private location: Location) {

  }

  ngOnInit() {
  }

  back($event) {
    this.location.back();
  }

}
