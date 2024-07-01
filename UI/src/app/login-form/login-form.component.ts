import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private service: ApiserviceService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.email);
    console.log(this.password);
    this.service.login(this.email, this.password).then(() => {
      this.router.navigate(['/firstpage']);
    });
  }
}
