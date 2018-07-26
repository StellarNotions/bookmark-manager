// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FeaturesModule } from '../features/features.module';

// Components
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    FeaturesModule
  ],
  declarations: [CoreComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
