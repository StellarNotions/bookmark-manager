// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules


// Components
import { WorkspaceComponent } from './workspace/workspace.component';
import { SharedModule } from '../shared/shared.module';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { InboxComponent } from './inbox/inbox.component';
import { SideNavigationHeaderComponent } from './side-navigation/side-navigation-header/side-navigation-header.component';
import { SideNavigationContentComponent } from './side-navigation/side-navigation-content/side-navigation-content.component';
import { SideNavigationFooterComponent } from './side-navigation/side-navigation-footer/side-navigation-footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SideNavigationComponent,
    WorkspaceComponent,
    FavoritesComponent,
    InboxComponent,
    SideNavigationHeaderComponent,
    SideNavigationContentComponent,
    SideNavigationFooterComponent
  ],
  exports: [
    SideNavigationComponent,
    WorkspaceComponent,
    FavoritesComponent,
    InboxComponent
  ]
})
export class FeaturesModule { }
