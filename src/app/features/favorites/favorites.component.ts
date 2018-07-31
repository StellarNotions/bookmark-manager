import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favicons: {site: string, url: string}[] = [
    {
      site: 'https://evernote.com/',
      url: 'https://s3.amazonaws.com/topdesk/icons/bigicons/000/002/938/original/com.evernote.favicon.png?1463628884'
    },
    {
      site: 'https://github.com/',
      url: 'https://s3.amazonaws.com/topdesk/icons/bigicons/000/000/189/original/com.github.favicon.png?1463628813'
    },
    {
      site: 'https://protonmail.com/',
      url: 'https://s3.amazonaws.com/topdesk/icons/bigicons/001/582/533/original/com.protonmail.mail.favicon.png?1472168901'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
