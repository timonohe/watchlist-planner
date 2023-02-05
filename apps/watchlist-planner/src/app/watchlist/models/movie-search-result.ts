export interface MovieSearchResult {
  page: number;
  results: MovieSearchResultItem[];
}

export interface MovieSearchResultItem {
  poster_path: string;
}