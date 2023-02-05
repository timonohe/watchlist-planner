import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'watchlist-planner-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private angularAuthService: AngularFireAuth,
    private router: Router,
  ) { }

  onLogout(): void {
    this.angularAuthService.signOut().then(() => this.router.navigate(['/auth']));
  }
}
