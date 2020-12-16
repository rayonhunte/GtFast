import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'GtFast';

  constructor(private  afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.afAuth.onAuthStateChanged(
      (user) => {
        if(user) {
          this.router.navigate(['/profile'])
        } else {
          this.router.navigate(['/login'])
        }
      } 
    )
  }
}
