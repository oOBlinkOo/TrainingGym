
      <h2 class="form-register-heading">Registration Form</h2>
      <form class="form-register" #registrationForm = "ngForm" (ngSubmit)="onSubmit()">
        <div class="form-group">      
          <label for="inputName">Name</label>
          <input type="text" id="inputName" name="inputName" [(ngModel)]="model.name" class="form-control" placeholder="Name" required autofocus>   
        </div> 
        
        <div class="form-group">          
          <label for="inputEmail">Email address</label>
          <input type="email" id="inputEmail" name="inputEmail" [(ngModel)]="model.email" pattern="^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@(-?[a-zA-Z0-9])(-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$" class="form-control"  placeholder="Email address" required autofocus>
        </div>
        <div class="form-group">          
          <label for="password" >Password</label>
          <input type="password" id="password" name="password" [(ngModel)]="model.password" class="form-control" placeholder="Password" required  validateEqual="retypePassword" reverse="true" #password="ngModel">
        </div>
        <div class="form-group">  
          <label for="retypePassword">Retype Password</label>
          <input type="password" id="retypePassword" name="retypePassword" [(ngModel)]="model.retypePassword" class="form-control" placeholder="Retype Password" required validateEqual="password" reverse="false" #retypePassword="ngModel">         
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit"  [disabled]="!registrationForm.form.valid || disableButton" >Register</button>
        <p>{{errorMessage}}</p>
      </form>
      <p>
        <a routerLink="/public/user/login" routerLinkActive="active">Login</a>
      </p>
      <p>Note: Process Tempo works best with Chrome, Firefox and Safari.</p>