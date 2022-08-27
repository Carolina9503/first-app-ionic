import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNaci: Date = new Date();
  // customPickerOptions = {
  //   buttons: [
  //     {
  //       text: 'Hola',
  //       handler: (event) => {
  //         console.log(event);
  //       }
  //     },
  //     {
  //       text: 'Mundo',
  //       handler: (event) => {
  //         console.log('log');
  //       }
  //     }
  //   ]
  // };
  constructor() { }

  ngOnInit() {
  }
  cambioFecha( event ){
  console.log(event);
  console.log( new Date(event.detail.value));
  }

}
