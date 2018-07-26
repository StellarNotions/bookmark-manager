// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules


// Components
import { WorkspaceComponent } from './workspace/workspace.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    GlobalHeaderComponent,
    WorkspaceComponent,
    SidebarComponent
  ],
  exports: [
    GlobalHeaderComponent,
    SidebarComponent,
    WorkspaceComponent
  ]
})
export class FeaturesModule { }
