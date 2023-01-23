import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: AuthComponent }
    ]),
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthModule {}
