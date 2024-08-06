import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { SearchSectionComponent } from './search-section/search-section.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardsComponent,SearchSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng2-1';
}
