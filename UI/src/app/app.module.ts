import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { OAuthModule,OAuthStorage } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [AppComponent, LoginFormComponent, SignupFormComponent, FirstpageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
    OAuthModule.forRoot({resourceServer:{allowedUrls:[''],sendAccessToken: true}})],
  providers: [ { provide: OAuthStorage, useValue: localStorage }],
  bootstrap: [AppComponent],
})
export class AppModule {}
