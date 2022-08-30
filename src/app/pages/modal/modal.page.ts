import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Carolina',
        pais: 'Costa Rica'
      }
    });
    await modal.present();

    // diferencias entre onDidDismiss y onWillDismiss(se cierra inmediatamente antes de que empiece a hacerce la animacion)
    // const {data} = await modal.onDidDismiss();
    const {data} = await modal.onWillDismiss();
    console.log('onWillDismiss');
  }
}
