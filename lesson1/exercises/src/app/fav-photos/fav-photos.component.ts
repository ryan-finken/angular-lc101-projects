import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'A Better Section Heading For Some Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://m.media-amazon.com/images/M/MV5BMTkyNjA5NTA1NV5BMl5BanBnXkFtZTcwNjU0NjgyMQ@@._V1_UY317_CR3,0,214,317_AL_.jpg';
  image3 = 'https://www.sierraclub.org/sites/www.sierraclub.org/themes/pt/images/logos/sc-logo-green.svg';

  constructor() { }

  ngOnInit() {
  }

}