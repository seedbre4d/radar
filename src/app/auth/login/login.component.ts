import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/API/services/services/auth.service';
import { LoadingService } from 'src/app/API/services/services/loading.service';

export class User implements firebase.default.UserInfo {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  providerId: string;
  uid: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  loading$ = this.loadingService.loading$;
  invalidCredentials = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  async login(form: NgForm) {
    this.invalidCredentials = false;
    if (form.invalid) return;
    try {
      await this.authService.login(this.email, this.password);
    } catch (e) {
      this.invalidCredentials = true;
    }
  }

  register() {}
}
