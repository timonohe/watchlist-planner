import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'watchlist-planner-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder, 
    private auth: AngularFireAuth,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      passwort: new FormControl('', Validators.required)
    });
  }

  login() {
    const {email, passwort} = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email, passwort).then(() => this.router.navigate(['/dashboard']));
  }
}
