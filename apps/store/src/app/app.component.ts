import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { Game } from '@bg-hoard/util-interface';
// import { sendNotification } from '@bg-hoard/api/util-notifications';

// sendNotification('3')

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formatRating = formatRating;
  title = 'Board Game Hoard';
  games = this.http.get<Game[]>('/api/games');
  constructor(private http: HttpClient) {}
}
