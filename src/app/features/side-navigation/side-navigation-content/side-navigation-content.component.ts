import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-navigation-content',
  templateUrl: './side-navigation-content.component.html',
  styleUrls: ['./side-navigation-content.component.scss']
})
export class SideNavigationContentComponent implements OnInit {
  @Input('bookmarks') bookmarks: {}[];
  showChildren = false;

  constructor() { }

  ngOnInit() {
  }

  toggleChildren() {
    this.showChildren = !this.showChildren;
  }
}
