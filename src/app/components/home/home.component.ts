import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationControlService } from 'src/app/services/navigation-control.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private navstore: NavigationControlService) {

  }

  ngOnInit() {
  }

  showPage($event) {

    if (!$event.extra_data) {
      throw new Error("The $event has not extra_data available...");
    }
    const selected = $event.extra_data.path.toLowerCase();
    if (selected !== this.navstore.newstate) {
      this.router.navigate(['/error']);

    } else {
      switch (selected) {
        case "animales":
          this.navstore.navcontrol$.next("libros");
          this.router.navigate(['/page/animales']);
          break;
        case "libros":
          this.navstore.navcontrol$.next("musica");
          this.router.navigate(['/page/libros']);
          break;
        case "musica":
          this.navstore.navcontrol$.next("salud");
          this.router.navigate(['/page/musica']);
          break;
        case "salud":
          this.navstore.navcontrol$.next("animales");
          this.router.navigate(['/page/salud']);
          break;
      }
    }


  }

}
