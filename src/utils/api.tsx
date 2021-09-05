import axios from "axios";
import {
  API_KEYS,
  BASE_URL,
  CATEGORY,
  LANGUAGE_CONFIG,
  MOVIEURL,
  TVURL,
} from "./constants";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEYS,
    language: LANGUAGE_CONFIG,
  },
});

export const moviesApi = {
  nowPlaying: () => api.get(`${CATEGORY.movie}${MOVIEURL.nowPlaying}`),
  upcomming: () => api.get(`${CATEGORY.movie}${MOVIEURL.upcomming}`),
  popular: () => api.get(`${CATEGORY.movie}${MOVIEURL.popular}`),
  movieDetail: (id: string | number) =>
    api.get(`${CATEGORY.movie}/${id}`, {
      params: {
        append_to_response: CATEGORY.videos,
      },
    }),
};

export const tvapi = {
  topRated: () => api.get(`${CATEGORY.tv}${TVURL.topRated}`),
  popular: () => api.get(`${CATEGORY.tv}${TVURL.popular}`),
  airingToday: () => api.get(`${CATEGORY.tv}${TVURL.airingToday}`),
  showDetail: (id: string | number) =>
    api.get(`${CATEGORY.tv}/${id}`, {
      params: {
        append_to_response: CATEGORY.videos,
      },
    }),
  search: (term: string) =>
    api.get(`${CATEGORY.search}/${CATEGORY.tv}`, {
      params: {
        query: term,
      },
    }),
};
