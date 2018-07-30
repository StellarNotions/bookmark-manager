import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../../core/Category';
import {SideNavigationCategoryComponent} from '../side-navigation-category/side-navigation-category.component';

@Component({
  selector: 'app-side-navigation-content',
  templateUrl: './side-navigation-content.component.html',
  styleUrls: ['./side-navigation-content.component.scss']
})
export class SideNavigationContentComponent implements OnInit {
  @ViewChild(SideNavigationCategoryComponent) SideNavigationCategoryComponent: SideNavigationCategoryComponent;
  @Input('categories') categories: Category[];

  constructor() { }

  ngOnInit() {
  }

  toggleCategoryChildren(index: number) {
    this.categories[index].showSubcategories = !this.categories[index].showSubcategories;
  }
}
