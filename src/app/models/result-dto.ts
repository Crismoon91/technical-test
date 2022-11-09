import { Movies } from './movie-dto';

export interface Result {
  results: Movies[];
  total_results: number;
}
