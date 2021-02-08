import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingService } from './loading.service';

// auth.service.ts
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.default.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Success!', value);
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.loadingService.set(true);
    return from(this.firebaseAuth.signInWithEmailAndPassword(email, password))
      .pipe(
        finalize(
          () => (this.router.navigateByUrl('/'), this.loadingService.set(false))
        )
      )
      .toPromise();
  }

  logout() {
    this.loadingService.set(true);
    return from(this.firebaseAuth.signOut())
      .pipe(
        finalize(
          () => (
            this.router.navigateByUrl('auth/login'),
            this.loadingService.set(false)
          )
        )
      )
      .toPromise();
  }
}
