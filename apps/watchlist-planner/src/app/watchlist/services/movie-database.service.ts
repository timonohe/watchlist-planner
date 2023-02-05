import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieSearchResult } from "../models/movie-search-result";

@Injectable({
  providedIn: 'root'
})
export class MovieDatabaseService {

  constructor(private http: HttpClient) { }

  searchMovies(searchterm: string): Observable<MovieSearchResult> {
    return this.http.get<MovieSearchResult>(`https://api.themoviedb.org/3/search/movie?api_key=5740c48c5cd0b7f40aafa3327312e103&language=de-DE&query=${searchterm}`);
  }

}