import { Component } from '@angular/core';

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

validateLogin(){
  if (this.username=='123' && this.password=='123' ){
    console.log('got it');
}else {
    console.log('password incorrecto');
}

}

}
