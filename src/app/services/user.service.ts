import {Injectable} from '@angular/core';
import {Http ,RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService{
    http:any;
    baseUrl: String;

    constructor(http:Http){
        this.http = http;
         this.baseUrl = 'http://localhost:3000';
        // this.baseUrl = 'https://morning-sierra-10830.herokuapp.com';
    }
      options = new RequestOptions({
     withCredentials: true
  });

    // getPosts(category, limit){
    //     return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
    //         .map(res => res.json());
    // }

    login(email, password) {
    var credentials = { email: email, password: password};
    console.log ('llamando al api HERE ',email,password);
    return this.http.post(this.baseUrl + '/user/login', credentials,this.options).map(responseObject => {
        if(responseObject.status == 200)
          return responseObject.json();
        else
          return false;
    });
  }
     createAccount(names,email,password,birth,gender, location) {
    var credentials = { names:names,email: email, password: password, birth:birth, gender:gender, location:location};
  //  console.log ('llamando al api HERE ',email,password);
    return this.http.post(this.baseUrl + '/user/register', credentials,this.options).map(responseObject => {
        if(responseObject.status == 200)
          return responseObject.json();
        else
          return false;
    });
}
}