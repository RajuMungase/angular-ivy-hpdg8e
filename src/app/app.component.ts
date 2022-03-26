import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  name = 'Angular ' + VERSION.major;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('OnInit');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
