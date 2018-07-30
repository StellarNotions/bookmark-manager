import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationCategoryComponent } from './side-navigation-category.component';

describe('SideNavigationCategoryComponent', () => {
  let component: SideNavigationCategoryComponent;
  let fixture: ComponentFixture<SideNavigationCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
