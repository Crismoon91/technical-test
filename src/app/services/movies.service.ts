import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movie-dto';
import { Result } from '../models/result-dto';
import { Favorite } from '../models/favorites-dto';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url: string = 'https://api.themoviedb.org/3/search/movie';

  private apiKey: string = '8f781d70654b5a6f2fa69770d1d115a3';

  public favoriteMovies: Favorite[] = [];

  constructor(private http: HttpClient) {}

  getMovies(text: string) {
    return this.http.get<Result>(
      `${this.url}?api_key=${this.apiKey}&query=${text}`
    );
  }

  addFavorite(favorite: Favorite) {
    let localStorageMovies = localStorage.getItem('movies');
    if (localStorageMovies) {
      this.favoriteMovies = JSON.parse(localStorageMovies || '[]');
    }
    this.favoriteMovies.push({
      title: favorite.title,
      poster_path: favorite.poster_path,
      vote_average: favorite.vote_average,
      release_date: favorite.release_date,
    });
    localStorage.setItem('movies', JSON.stringify(this.favoriteMovies));
  }

  deleteFavorite(favorite: Favorite) {
    const localStorageMovies: Favorite[] = JSON.parse(
      localStorage.getItem('movies') || '[]'
    );
    const favoriteMovies = localStorageMovies.filter(
      (movie) => movie.title !== favorite.title
    );
    localStorage.setItem('movies', JSON.stringify(favoriteMovies));
    return favoriteMovies;
  }

  isFavorite(newMovie: Movies) {
    let isFavoriteMovie: Favorite | undefined;
    const favoriteMovies: Favorite[] = JSON.parse(
      localStorage.getItem('movies') || '[]'
    );
    if (favoriteMovies) {
      isFavoriteMovie = favoriteMovies.find(
        (favoriteMovie) => favoriteMovie.title === newMovie.title
      );
    }
    return !!isFavoriteMovie;
  }
}
