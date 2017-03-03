import { Component ,ViewChild} from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {UserService} from '../../app/services/user.service';
import { NgForm } from '@angular/forms';

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
  

  heroForm: NgForm;
  @ViewChild('heroForm') currentForm: NgForm;

  home() {
   this.navCtrl.pop();
}

 formErrors = {
    'firstName': '',
    'power': ''
  };
   validationMessages = {
    'firstName': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };

  ngAfterViewChecked() {
    console.log('afterviewchecked???');
    this.formChanged();
  }

    formChanged() {
    if (this.currentForm === this.heroForm) { return; }
    this.heroForm = this.currentForm;
    if (this.heroForm) {
      this.heroForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

   onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

onSubmit(){
  console.log('apreto el on submit');
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


// function to validate input values
// _keyPress(event: any) {
//     const pattern = /[0-9\+\-\ ]/;
//     let inputChar = String.fromCharCode(event.charCode);

//     if (!pattern.test(inputChar)) {
//       // invalid character, prevent input
//       event.preventDefault();
//     }
// }


