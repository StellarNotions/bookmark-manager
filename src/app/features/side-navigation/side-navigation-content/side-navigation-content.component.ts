import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../core/Category';

@Component({
  selector: 'app-side-navigation-content',
  templateUrl: './side-navigation-content.component.html',
  styleUrls: ['./side-navigation-content.component.scss']
})
export class SideNavigationContentComponent implements OnInit {
  @Input('categories') categories: Category[];

  constructor() { }

  ngOnInit() {
  }

  toggleCategoryChildren(e: MouseEvent, index: number) {
    this.categories[index].showSubcategories = !this.categories[index].showSubcategories;
  }

  toggleSubcategoryChildren(e: MouseEvent, categoryIndex: number, subcategoryIndex: number) {
    this.categories[categoryIndex].subcategories[subcategoryIndex].showSubcategories =
      !this.categories[categoryIndex].subcategories[subcategoryIndex].showSubcategories;
  }
}
