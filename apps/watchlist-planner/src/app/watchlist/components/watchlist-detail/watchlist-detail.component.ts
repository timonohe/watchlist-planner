import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MovieSearchResult, MovieSearchResultItem } from '../../models/movie-search-result';
import { MovieDatabaseService } from '../../services/movie-database.service';

@Component({
  selector: 'watchlist-planner-watchlist-detail',
  templateUrl: './watchlist-detail.component.html',
  styleUrls: ['./watchlist-detail.component.scss'],
})
export class WatchlistDetailComponent {

  searchresults$: Observable<MovieSearchResult> = of();

  searchForm = this.fb.group({
    searchinput: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private movieDatabaseService: MovieDatabaseService) { }

  onSearchTrigger() {
    if (this.searchForm.valid && this.searchForm.value.searchinput) {
      this.searchresults$ = this.movieDatabaseService.searchMovies(this.searchForm.value.searchinput);
    }
  }

  getMoviePosterPath(movie: MovieSearchResultItem): string {
    return `https://image.tmdb.org/t/p/original/${movie.poster_path}`
  }

}
