import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movie-dto';
import { Result } from 'src/app/models/result-dto';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public movieSearch?: Result;
  public search?: number;
  public myMovies?: string | null;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.myMovies = localStorage.getItem('movies');
  }

  public getMovieByQuery(query: string) {
    this.moviesService.getMovies(query).subscribe((resp: Result) => {
      this.movieSearch = resp;
      this.search = resp.total_results;
      this.movieSearch.results = this.movieSearch.results.map((result) => ({
        ...result,
        isFavorite: this.moviesService.isFavorite(result),
      }));
    });
  }

  favoriteClick(event: Movies) {
    const movie = this.movieSearch?.results.find(
      (movie) => movie.title === event.title
    )!;
    if (event.isFavorite) {
      movie.isFavorite = false;
      this.moviesService.deleteFavorite(event);
    } else {
      movie.isFavorite = true;
      this.moviesService.addFavorite(event);
    }
  }
}
