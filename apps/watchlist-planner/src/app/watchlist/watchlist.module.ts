import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WatchlistViewComponent } from './components/watchlist-view/watchlist-view.component';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { WatchlistAddComponent } from './components/watchlist-add/watchlist-add.component';
import { MatIconModule } from '@angular/material/icon';
import { WatchlistDetailComponent } from './components/watchlist-detail/watchlist-detail.component';
import { WatchlistListComponent } from './components/watchlist-list/watchlist-list.component';

@NgModule({
  declarations: [
    WatchlistViewComponent,
    WatchlistAddComponent,
    WatchlistDetailComponent,
    WatchlistListComponent,
  ],
  imports: [
    WatchlistRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class WatchlistModule {}
