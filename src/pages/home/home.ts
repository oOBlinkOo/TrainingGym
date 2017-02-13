import { Component } from '@angular/core';

import { NavController ,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
      username: string;
      password:string;

  constructor(public navCtrl: NavController ,public params:NavParams) {
    this.username = params.get('username');
    this.password = params.get('password');
  }

  ngOnInit(){
    
    console.log(this.username,this.password);
  }

}
