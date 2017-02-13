import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';
import {HomePage} from '../home/home';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'testing-page',
  templateUrl: 'testingpage.html'
})
export class testingPage {

  constructor(public navCtrl: NavController ,
      public viewCtrl: ViewController,
      public appCtrl: App
      ) {

  }
username : string = null;
password : string= null;
showmessageWrongPassword :boolean = false;

validateLogin(){
  if (this.username=='123' && this.password=='123' ){
    console.log('got it');
      // this.viewCtrl.dismiss();
    //   this.appCtrl.getRootNav().push(HomePage, {
    //   username:this.username,
    //   password:this.password
    
    // });

     this.navCtrl.setRoot(HomePage, {
      username:this.username,
      password:this.password
    
    });
}else {
    console.log('password incorrecto');
    this.showmessageWrongPassword = true;
}

}

// pushPage() {
//       this.viewCtrl.dismiss();
//       this.appCtrl.getRootNav().push(HomePage, {
//       username:this.username,
//       password:this.password
    
//     });

//     }

}
