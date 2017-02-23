import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { testingPage } from '../TestingPage/testingPage';
import { NavParams } from 'ionic-angular';
import {ShareService} from '../../app/services/shareService';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = testingPage;
     username: string;
     password:string;
     response:any;

  constructor(public params:NavParams,
              public shareService:ShareService
  ) {
    //    this.username = params.get('username');
    // this.password = params.get('password');
    // this.response = params.get('response');
      this.shareService.setBasicInfo( params.get('username'), params.get('password'), params.get('response'))
    
  }

  // setBasic(user:any,pass:any , resp:any){
  //   this.username = user;
  //   this.password = pass;
  //   this.response = resp;
  // }
}
