import { Component, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/favorites-dto';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public favoriteMovies: Favorite[] = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.favoriteMovies = JSON.parse(localStorage.getItem('movies') || "[]")
  }

  deleteMovie(favoriteMovie: Favorite){
    this.favoriteMovies = this.moviesService.deleteFavorite(favoriteMovie)
  }
}
