import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationControlService {

  public navcontrol$: Subject<string>;

  public newstate: string = "animales"

  constructor() {
    this.navcontrol$ = new Subject();
    this.navcontrol$.subscribe(newstate => this.newstate = newstate);
  }

}
