import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  usuarios: Observable<any>;

  constructor(private dataService: DataService) {   }

  ngOnInit() {
    // como es un observable se debe de utilizar el subscribe() por que sino nunca se dispara el evento getUsuarios
    this.usuarios = this.dataService.getUsuario();
    this.usuarios.subscribe(console.log);
  }

  favorite(user){
    console.log('favorite',user);
    this.ionList.closeSlidingItems();
  }
  share(user){
    console.log('user',user);
    this.ionList.closeSlidingItems();
  }
  delete(user) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

}
