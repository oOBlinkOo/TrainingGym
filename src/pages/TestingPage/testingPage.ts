import { Component } from '@angular/core';
import {HomePage} from '../home/home';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'testing-page',
  templateUrl: 'testingpage.html'
})
export class testingPage {

  constructor(public navCtrl: NavController) {

  }
username : string = null;
password : string= null;
showmessageWrongPassword :boolean = false;

validateLogin(){
  if (this.username=='123' && this.password=='123' ){
    console.log('got it');
     this.navCtrl.push(HomePage, {
      username:this.username,
      password:this.password
    
    });
}else {
    console.log('password incorrecto');
    this.showmessageWrongPassword = true;
}

}

}
