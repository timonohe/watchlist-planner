import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { watch } from 'fs';
import { BehaviorSubject, map } from 'rxjs';
import { Watchlist } from '../../models/watchlist';
import { WatchlistService } from '../../services/watchlist.service';

interface WatchListItem {
  id: string;
  name: string;
  beschreibung: string;
}

@Component({
  selector: 'watchlist-planner-watchlist-list',
  templateUrl: './watchlist-list.component.html',
  styleUrls: ['./watchlist-list.component.scss'],
})
export class WatchlistListComponent {
  watchlisten$ = new BehaviorSubject<WatchListItem[]>([]);

  constructor(
    private auth: AngularFireAuth,
    private watchListService: WatchlistService
  ) {
    this.fetchWatchlists();
  }

  async fetchWatchlists(): Promise<void> {
    const user = await this.auth.currentUser;

    if (user) {
      this.watchListService.fetchWatchlists(user.uid)
        .pipe(
          map(changes => changes.map(c => 
            ({ id: c.payload.key, ...c.payload.val()} as WatchListItem)
          ))
        ).subscribe((watchLists: WatchListItem[]) => this.watchlisten$.next(watchLists));
    }
  }
}