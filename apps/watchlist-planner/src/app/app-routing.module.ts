import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'dashboard',
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   },
   {
    path: 'watchlist',
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    loadChildren: () => import('./watchlist/watchlist.module').then(m => m.WatchlistModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }