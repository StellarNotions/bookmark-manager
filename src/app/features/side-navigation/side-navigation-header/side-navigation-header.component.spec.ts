import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationHeaderComponent } from './side-navigation-header.component';

describe('SideNavigationHeaderComponent', () => {
  let component: SideNavigationHeaderComponent;
  let fixture: ComponentFixture<SideNavigationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
