// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SideNavbarComponent],
  exports: [
    SideNavbarComponent,
  ]
})
export class SharedModule { }
