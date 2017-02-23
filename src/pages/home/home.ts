import { Component } from '@angular/core';
// import { LoadingController } from 'ionic-angular';

import { NavController ,NavParams } from 'ionic-angular';
import {ShareService} from '../../app/services/shareService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
      username: string;
      password:string;
      response:any;
      name:string=null;

  constructor(public navCtrl: NavController ,public params:NavParams,public shareService:ShareService
              
  ) {
    // this.username = params.get('username');
    // this.password = params.get('password');
    // this.response = params.get('response');
  }

  ngOnInit(){
   
    // console.log(this.username,this.password);
   this.response =this.shareService.getBasicInfo();
    this.name =this.response[0].name;
  }

 
}
