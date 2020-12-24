import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FastComponent } from './user/fast/fast.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import {IsLoginGuard} from './shared/is-login.guard';
import { SettingComponent } from './shared/setting/setting.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [IsLoginGuard]},
  {path: 'fast', component: FastComponent, canActivate: [IsLoginGuard]},
  {path: 'setting', component: SettingComponent, canActivate: [IsLoginGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
