import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the RegisterUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html'
})
export class RegisterUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterUserPage');
  
}
  home() {
   this.navCtrl.pop();
  

}
// presentToast(position: string) {
//     let toast = this.toastCtrl.create({
//       message: 'Verify your account email address, the email address of your TrainingGym account needs to be verified',
//       duration: 3000
//     });
//     toast.present();
//   }

    showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Verify your account email address, the email address of your TrainingGym account needs to be verified using your personal accoun email',
      position: position,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
toast.onDidDismiss(() => {
  this.home();
   console.log('Dismissed toast');
 }); 
    toast.present(toast);
  }
}




