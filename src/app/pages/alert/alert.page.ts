import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage: string ;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  onClick(){
  this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message!',
      buttons: [
        {
          text:'OK',
          handler: () => {
            console.log('Click en ok');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('click en cancel');
          }
        },
      ],
    });

    await alert.present();
  }
  async presentAlertConInputs() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [
        {
          text:'OK',
          handler: (data) => {
            console.log(data);
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Name',
          name:'name1',
        },
        {
          name:'name2',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name:'name3',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name:'name4',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}
