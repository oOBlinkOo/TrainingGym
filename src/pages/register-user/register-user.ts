import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {UserService} from '../../app/services/user.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,    private userService: UserService, public toastCtrl:ToastController) {}
  firstName:string = '';
  lastName:string = '';
  Email:string = '';
  Password:string = '';
  ConfPassWord:string = '';
  myDate:Date = null;
  gender:string = '';

  home() {
   this.navCtrl.pop();
}
 onCreateAccount(){
   if (this.Password == this.ConfPassWord) {
           this.userService.createAccount(this.firstName,this.lastName, this.myDate,this.gender,this.Password,this.Email).subscribe(
              responseUserService => {
                if (responseUserService) {
                  // this.loader.dismiss();
                  console.log('paso por aqui en el validate login',responseUserService);
                   this.showToast('middle','Verify your account email address, the email address of your TrainingGym account needs to be verified using your personal accoun email');
                }
                else {
              console.log('else en el create account  del service');
               this.showToast('middle','Error in the service calling a create account');
                }
              },  (error)=>   {
                console.log(error);
                  this.showToast('middle','Error Missing Conection');
              }
            );


        
   }else {
        console.log ('show a danger or something not finish this!');
   }
  
 }

    showToast(position: string , message : string) {
    let toast = this.toastCtrl.create({
      message: message,
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




