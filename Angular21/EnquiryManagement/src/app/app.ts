import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);
  protected readonly title = signal('EnquiryManagement');
  loggedUser = signal<string | null>(localStorage.getItem('enquiryUser'));
  isMenuOpen = signal(false);

  constructor() {
    // Automatically close mobile menu on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isMenuOpen.set(false);
    });

    // Optional: Sync signal if localStorage changes in other tabs
    window.addEventListener('storage', () => {
      this.loggedUser.set(localStorage.getItem('enquiryUser'));
    });

    // Check every second to react to login component's localStorage change 
    setInterval(() => {
      const user = localStorage.getItem('enquiryUser');
      if (user !== this.loggedUser()) {
        this.loggedUser.set(user);
      }
    }, 500);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  logout() {
    localStorage.removeItem('enquiryUser');
    this.loggedUser.set(null);
    this.isMenuOpen.set(false);
    this.router.navigate(["/home"]);

  }
}
