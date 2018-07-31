import { Component, OnInit } from '@angular/core';
import {BookmarksService} from '../../core/bookmarks.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  categories: {}[];

  constructor(private bookmarksService: BookmarksService) { }

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks(): void {
    this.bookmarksService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
