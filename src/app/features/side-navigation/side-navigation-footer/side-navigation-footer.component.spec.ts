import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationFooterComponent } from './side-navigation-footer.component';

describe('SideNavigationFooterComponent', () => {
  let component: SideNavigationFooterComponent;
  let fixture: ComponentFixture<SideNavigationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
