import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WatchlistAddComponent } from "./components/watchlist-add/watchlist-add.component";
import { WatchlistDetailComponent } from "./components/watchlist-detail/watchlist-detail.component";
import { WatchlistListComponent } from "./components/watchlist-list/watchlist-list.component";
import { WatchlistViewComponent } from "./components/watchlist-view/watchlist-view.component";

const routes: Routes = [
  { 
    path: 'add', 
    component: WatchlistAddComponent 
  },
  { 
    path: '', 
    component: WatchlistViewComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: WatchlistListComponent
      },
      {
        path: ':id',
        component: WatchlistDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule { }