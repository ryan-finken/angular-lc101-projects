import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string): string {
      let errorMessage: string = '';
      if (!this.movies.includes(newTitle) && newTitle){
         this.movies.push(newTitle);
      } else {
         if (this.movies.includes(newTitle)) {
            errorMessage = `ERROR: ${newTitle} is already listed.`;
         } else if (!newTitle) {
            errorMessage = 'ERROR: Blank entry.';
         }
      }
      return errorMessage;
   }
}