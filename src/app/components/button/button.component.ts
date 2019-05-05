import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  changeback: boolean = false;

  @Input()
  extra_data: string = undefined;

  @Input()
  isFirst: boolean = false;

  @Output()
  onCommonButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onClicked($event) {

    if (this.extra_data) {
      $event.extra_data = JSON.parse(this.extra_data);
    }
    this.onCommonButtonClicked.emit($event);

  }

}
