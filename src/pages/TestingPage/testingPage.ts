import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {TabsPage} from '../tabs/tabs';
import {UserService} from '../../app/services/user.service';
import { LoadingController ,AlertController  } from 'ionic-angular';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'testing-page',
  templateUrl: 'testingpage.html'
})
export class testingPage {

  constructor(public navCtrl: NavController ,
      public viewCtrl: ViewController,
      public appCtrl: App,
      private userService: UserService,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController
      ) {

  }
username : string = null;
password : string= null;
showmessageWrongPassword :boolean = false;
loader :any;

validateLogin(){
  this.presentLoading();
         this.userService.login(this.username, this.password).subscribe(
              responseUserService => {
                if (responseUserService) {
                  this.loader.dismiss();
                  console.log('paso por aqui en el validate login',responseUserService);
                    this.navCtrl.setRoot(TabsPage, {
                      username:responseUserService.email,
                      password:responseUserService.password,
                      response:responseUserService
                    
                    });
                }
                else {
                  this.showAlert('The user or the password dont match with any user registered');
                }
              },  (error)=>   {
                console.log(error);
                // this.loader.dismiss();
                this.showAlert('me lleva');
                // this.message = error.statusText;
                
                
                // console.log('error something in drag and drop');
              }
            );

}

showAlert(mesage :string) {
  let tittle;
  let subTitle;
  let buttons;
  console.log('asfsfasf');
  if (mesage == null) {
      tittle = 'Error!';
      subTitle = 'Try in a while!';
      buttons = 'OK';

  }else {
      tittle = 'Error!';
      subTitle = mesage;
      buttons = 'OK';
  }
    let alert = this.alertCtrl.create({
      title: tittle,
      subTitle: subTitle,
      buttons: [buttons]
    });
    this.loader.dismiss();
    alert.present();
  }


// pushPage() {
//       this.viewCtrl.dismiss();
//       this.appCtrl.getRootNav().push(HomePage, {
//       username:this.username,
//       password:this.password
    
//     });

//     }
 presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 3000,
      dismissOnPageChange: true
    });
    this.loader.present();
  }


}
