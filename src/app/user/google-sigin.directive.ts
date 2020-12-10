import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSigin]'
})
export class GoogleSiginDirective {

  constructor(private afAuth: AngularFireAuth) { }
  @HostListener('click')
  onClick(): void {
    this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }
}
