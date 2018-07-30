import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../../core/Category';

@Component({
  selector: 'app-side-navigation-category',
  templateUrl: './side-navigation-category.component.html',
  styleUrls: ['./side-navigation-category.component.scss']
})
export class SideNavigationCategoryComponent implements OnInit, OnDestroy {
  @Input('parentCategory') parentCategory: Category;
  @Input('isSubSubCategories') isSubSubCategories = false;

  constructor() {
  }

  ngOnInit() {
    console.log(this.parentCategory.subcategories);
  }

  ngOnDestroy() {
    console.log('test');
  }
}
