import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search-section',
  standalone: true,
  imports: [],
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.css'
})
export class SearchSectionComponent {
  searchvalue: string = '';
  @Output() searching: EventEmitter<string> = new EventEmitter<string>();

  onsearching() {
    this.searching.emit(this.searchvalue);
    console.log("This value from search and value is", this.searchvalue);
  }
  reset(inputElement: HTMLInputElement){
    this.searchvalue='';
    inputElement.value='';
    this.searching.emit(this.searchvalue);
  }
}
