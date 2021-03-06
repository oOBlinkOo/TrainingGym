import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { testingPage } from '../pages/TestingPage/testingPage';
import {UserService} from './services/user.service';
import {RegisterUserPage} from '../pages/register-user/register-user'; //added by Andres Register component
import { ForgotpasswordPage } from '../pages/forgot-password/forgot-password'; //added by Andres forgotaccount component
import {ShareService} from './services/shareService';
import { EqualValidator } from './utilities/equal-validator.directive';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    testingPage,
    HomePage,
    TabsPage,
    RegisterUserPage,
    EqualValidator,
    ForgotpasswordPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    testingPage,
    HomePage,
    TabsPage,
    RegisterUserPage,
    ForgotpasswordPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler} ,UserService,ShareService]
})
export class AppModule {}
