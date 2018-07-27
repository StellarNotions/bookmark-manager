import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationContentComponent } from './side-navigation-content.component';

describe('SideNavigationContentComponent', () => {
  let component: SideNavigationContentComponent;
  let fixture: ComponentFixture<SideNavigationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
