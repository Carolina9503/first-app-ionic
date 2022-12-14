import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes: Observable<any>;
  buscarPublisher: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event){
    console.log(event.detail.value);
    this.buscarPublisher = event.detail.value;
  }

}
