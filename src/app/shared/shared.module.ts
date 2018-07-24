import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentsComponent, PipesComponent]
})
export class SharedModule { }
