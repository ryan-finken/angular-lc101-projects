import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'A Few of My Favorite Things';
  image1 = 'https://static.wixstatic.com/media/8d3f7b_a93686d900924aa7afe978d7e0b309de~mv2.jpg/v1/fill/w_739,h_381,al_c,lg_1,q_80/8d3f7b_a93686d900924aa7afe978d7e0b309de~mv2.webp';
  image2 = 'https://m.media-amazon.com/images/M/MV5BMTkyNjA5NTA1NV5BMl5BanBnXkFtZTcwNjU0NjgyMQ@@._V1_UY317_CR3,0,214,317_AL_.jpg';
  image3 = 'https://www.sierraclub.org/sites/www.sierraclub.org/themes/pt/images/logos/sc-logo-green.svg';

  constructor() { }

  ngOnInit() {
  }

}