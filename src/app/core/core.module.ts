// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {SharedModule} from '../shared/shared.module';

// Components
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CoreComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
