export class ShareService {  
  
    user: any;
    password: any;
    response: any;
 
    constructor() {
        this.user = 'vacio';
        this.password = 'vacio';
        this.response = 'vacio';
    }
  
    setBasicInfo(user, password,response) {
        this.user = user;
        this.password = password;       
        this.response = response;  
    }
  
    getBasicInfo() {
        return this.response;
    }   
}