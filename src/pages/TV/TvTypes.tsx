export interface TvDataTypes {
  backdrop_path: null | string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TvStateTypes {
  topRated: null | TvDataTypes[];
  popular: null | TvDataTypes[];
  airingToday: null | TvDataTypes[];
  error: null | string;
  loading: boolean;
}
