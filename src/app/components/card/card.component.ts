import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movies } from 'src/app/models/movie-dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title?: string;
  @Input() poster_path?: string;
  @Input() vote_average?: number;
  @Input() release_date?: string;
  @Input() isFavorite?: boolean = false;

  @Output() sendMovie: EventEmitter<Movies> = new EventEmitter();

  constructor() {}

  emitMovie() {
    this.sendMovie.emit({
      title: this.title || '',
      poster_path: this.poster_path || '',
      vote_average: this.vote_average || 0,
      release_date: this.release_date || '',
      isFavorite: this.isFavorite || false,
    });
  }
}
