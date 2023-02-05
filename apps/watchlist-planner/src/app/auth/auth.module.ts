import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
