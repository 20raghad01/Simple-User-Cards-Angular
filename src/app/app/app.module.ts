import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from '../app.component';
import { SearchSectionComponent } from '../search-section/search-section.component';
import { CardsComponent } from '../cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchSectionComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

