import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { of } from "rxjs";
import { Watchlist } from "../models/watchlist";

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  constructor(
    private db: AngularFireDatabase,
    private auth: AngularFireAuth,
  ) { }

  fetchWatchlists(uid: string) {
    return this.db.list<Watchlist>('/watchlist', ref => ref.orderByChild('erstelltVon').equalTo(uid)).snapshotChanges();
  }
}