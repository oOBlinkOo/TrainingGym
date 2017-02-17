import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {UserService} from '../../app/services/user.service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'testing-page',
  templateUrl: 'testingpage.html'
})
export class testingPage {

  constructor(public navCtrl: NavController ,
      public viewCtrl: ViewController,
      public appCtrl: App,
      private userService: UserService
      ) {

  }
username : string = null;
password : string= null;
showmessageWrongPassword :boolean = false;

validateLogin(){
         this.userService.login(this.username, this.password).subscribe(
              responseUserService => {
                if (responseUserService) {
                  console.log('paso por aqui en el validate login');
                    this.navCtrl.setRoot(HomePage, {
                      username:this.username,
                      password:this.password
                    
                    });
                }
                else {
                  null;
                  console.log('fallo en el else del response nose');
                }
              }, function (error) {
                this.message = error.statusText;
                console.log(this.message);
                // console.log('error something in drag and drop');
              }
            );

}

// pushPage() {
//       this.viewCtrl.dismiss();
//       this.appCtrl.getRootNav().push(HomePage, {
//       username:this.username,
//       password:this.password
    
//     });

//     }

}
