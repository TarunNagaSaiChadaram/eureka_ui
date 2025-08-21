import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Directives } from './components/directives/directives';

@Component({
  selector: 'app-root',
  imports: [Navbar,
Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project_july_2025');
}
