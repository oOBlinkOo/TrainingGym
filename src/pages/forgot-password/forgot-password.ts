import { Component ,ViewChild} from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {UserService} from '../../app/services/user.service';
import { NgForm } from '@angular/forms';


/*
  Generated class for the ForgotAccount page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,    private userService: UserService, public toastCtrl:ToastController) {}
Email:string = '';


 formErrors = {

'Email': '',

  };
   validationMessages = {
    
      'Email': {
      'required':      'Email is required.',
      'pattern':      'This is not a valid email.'
     
    },


  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  
  forgotForm: NgForm;
  @ViewChild('forgotForm') currentForm: NgForm;


  ngAfterViewChecked() {
    // console.log('afterviewchecked???');
    this.formChanged();
  }

    formChanged() {
    if (this.currentForm === this.forgotForm) { return; }
    this.forgotForm = this.currentForm;
    if (this.forgotForm) {
      this.forgotForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

   onValueChanged(data?: any) {
    if (!this.forgotForm) { return; }
    const form = this.forgotForm.form;
      
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      
      if (control && control.dirty && !control.valid) {
       
        const messages = this.validationMessages[field];
        //  console.log(control);
        // console.log(messages);
        for (const key in control.errors) {
          // console.log(key);
          // console.log(this.formErrors[field]);
           
          if(this.formErrors[field] ==''){
            this.formErrors[field] += messages[key] + ' ';
          } 
        
        }
      }
    }
  }





 resetAccount(){



        
   }
  //  else {
  //      console.log ('show a danger or something not finish this!');
  //  }
  
 }
