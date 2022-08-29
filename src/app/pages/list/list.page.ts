import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any>;

  constructor(private dataService: DataService) {   }

  ngOnInit() {
    // como es un observable se debe de utilizar el subscribe() por que sino nunca se dispara el evento getUsuarios
    this.usuarios = this.dataService.getUsuario();
    this.usuarios.subscribe(console.log);
  }

}
