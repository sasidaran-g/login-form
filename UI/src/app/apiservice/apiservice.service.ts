import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthConfig,OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private oauthservice:OAuthService,private http:HttpClient){}

  initAuth(){
    this.oauthservice.configure({
      issuer:'',
      clientId:'518727039166-1v83hb42f5lrqoiskspine75h54beh4m.apps.googleusercontent.com',
      redirectUri:window.location.origin,
      responseType:'code',
      scope:'sasidaran.gnanakumar@gmail.com'
    });
    this.oauthservice.loadDiscoveryDocumentAndTryLogin();
  }
  login(){
    return this.oauthservice.fetchTokenUsingPasswordFlow(username,password);
  }
}
