import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// angular fire
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
// environment file
import {environment as env, environment} from '../environments/environment';
// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleSiginDirective } from './user/google-sigin.directive';

//  ngxs
import {NgxsModule} from '@ngxs/store';
import { LoginComponent } from './user/login/login.component';

// shared module
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    GoogleSiginDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production}),
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
