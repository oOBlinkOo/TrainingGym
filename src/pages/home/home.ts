import { Component } from '@angular/core';

import { NavController ,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
      username: string;
      password:string;
      response:any;
      name:string=null;

  constructor(public navCtrl: NavController ,public params:NavParams) {
    this.username = params.get('username');
    this.password = params.get('password');
    this.response = params.get('response');
  }

  ngOnInit(){
    this.name =this.response[0].name;
    console.log(this.username,this.password);
  }

}
