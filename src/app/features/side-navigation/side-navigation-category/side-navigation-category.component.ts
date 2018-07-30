import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../core/Category';

@Component({
  selector: 'app-side-navigation-category',
  templateUrl: './side-navigation-category.component.html',
  styleUrls: ['./side-navigation-category.component.scss']
})
export class SideNavigationCategoryComponent implements OnInit {
  @Input('categories') categories: Category[];
  @Input('isSubSubCategories') isSubSubCategories = false;

  constructor() { }

  ngOnInit() {
  }

}
