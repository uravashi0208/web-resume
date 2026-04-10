import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  activeSection = 'home';
  menuOpen = false;

  navItems = [
    { id: 'home', icon: 'fa-home', label: 'Home' },
    { id: 'about', icon: 'fa-user', label: 'About' },
    { id: 'experience', icon: 'fa-briefcase', label: 'Experience' },
    { id: 'skills', icon: 'fa-code', label: 'Skills' },
    { id: 'services', icon: 'fa-cogs', label: 'Services' },
    { id: 'portfolio', icon: 'fa-folder-open', label: 'Portfolio' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    const sections = this.navItems.map((n) => n.id);
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) {
          this.activeSection = id;
          break;
        }
      }
    }
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
