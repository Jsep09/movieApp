export interface TrendingmovieResponse {
  page: number;
  results: MovieTrending[];
  total_pages: number;
  total_results: number;
}

export interface MovieTrending {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
