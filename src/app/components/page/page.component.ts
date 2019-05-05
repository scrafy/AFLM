import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LinkService } from 'src/app/services/linkservice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  title: string = "";
  name: string = "";
  descripcion: string = "";
  autor: string = "";
  data: Array<any> = []
  selected: any = {};

  constructor(private linkservice: LinkService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.title = this.route.snapshot.paramMap.get("title");
  }

  ngOnInit() {

    switch (this.title) {

      case "animales":
        this.linkservice.getAnimals().subscribe((resp: any) => this.data = resp.entries);
        break;
      case "libros":
        this.linkservice.getBooks().subscribe((resp: any) => this.data = resp.entries);
        break;
      case "musica":
        this.linkservice.getMusic().subscribe((resp: any) => this.data = resp.entries);
        break;
      case "salud":
        this.linkservice.getHealt().subscribe((resp: any) => this.data = resp.entries);
        break;
    }
  }

  back($event) {
    this.location.back();
  }

  navigate($event) {

    if (typeof this.selected.Link === "string" && this.selected.Link.length !== "") {
      window.open(this.selected.Link);
    }
  }
}
