import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'watchlist-planner-watchlist-add',
  templateUrl: './watchlist-add.component.html',
  styleUrls: ['./watchlist-add.component.scss'],
})
export class WatchlistAddComponent {

  watchlistForm = this.fb.group({
    name: ['', Validators.required],
    beschreibung: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder, 
    private auth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  async onWatchlistAdd(): Promise<void> {
    const user = await this.auth.currentUser;

    if (user) {
      this.db.list('watchlist').push({
        name: this.watchlistForm.get('name')?.value,
        beschreibung: this.watchlistForm.get('beschreibung')?.value,
        erstelltVon: user.uid
      });
    }
  }
}
