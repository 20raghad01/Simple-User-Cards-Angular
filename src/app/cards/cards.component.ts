import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { SearchSectionComponent } from '../search-section/search-section.component';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgStyle, SearchSectionComponent ,NgIf],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  imgurl:string="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
  UsersArray: Array<any>=
    [
      {
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "verified":true
      },
      {
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "verified":false,
      },
      {
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "verified":true

      },
      {
       
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "verified":false,
      },
      {
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "verified":false,
        
      },
      {
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "phone": "1-477-935-8478 x6430",
        "verified":true,
        
      },
      {
        
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "phone": "210.067.6132",
        "verified":true,
      },
      {
        
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "phone": "586.493.6943 x140",
        "verified":false,
        
      },
      {
        
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "phone": "(775)976-6794 x41206",
        "verified":true,
        
      },
      {
        
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "phone": "024-648-3804",
        "verified":true
        
      }
    ]
  searchdiv: string = '';

  onsearchclick(value: string) {
      this.searchdiv = value;
      console.log("This from cards and value is", this.searchdiv);
  }
  
}
