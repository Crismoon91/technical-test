import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModel } from 'src/app/models/buttons';
import { ButtonsType } from '../enums/buttons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  buttons: ButtonModel[] = [
    { label: 'NAVBAR.BUTTONS.HOME' },
    { label: 'NAVBAR.BUTTONS.FAVORITES' },
  ];

  constructor(private router: Router) {}

  navigate(label: string) {
    label === ButtonsType.HOME ? this.navigateToHome() : this.navigateToFavorites();
  }

  navigateToHome() {
    this.router.navigate(['main']);
  }

  navigateToFavorites() {
    this.router.navigate(['favorites']);
  }

}
