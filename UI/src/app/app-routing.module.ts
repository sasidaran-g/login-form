import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login-form',
    loadChildren: () =>
      import('./login-form/login-form.module').then((m) => m.LoginFormModule),
  },
  { path: '', redirectTo: 'login-form', pathMatch: 'full' },
  {
    path: 'signup-form',
    loadChildren: () =>
      import('./signup-form/signup-form.module').then(
        (m) => m.SignupFormModule
      ),
  },
  {
    path: 'login-form/signup-form',
    redirectTo: 'signup-form',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
