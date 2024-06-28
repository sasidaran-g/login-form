import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice/apiservice.service';
declare var google : any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.email);
    console.log(this.password);
    this.service.login(this.email, this.password).subscribe(
      (response) => {
        console.log('response from server', response);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  onBlur(): void { 
    console.log('Focus Is Lost for this Element'); 
} 
}
