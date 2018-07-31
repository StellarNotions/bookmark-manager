// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from '../shared/shared.module';


// Components
import { WorkspaceComponent } from './workspace/workspace.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { InboxComponent } from './inbox/inbox.component';
import { SideNavigationHeaderComponent } from './side-navigation/side-navigation-header/side-navigation-header.component';
import { SideNavigationContentComponent } from './side-navigation/side-navigation-content/side-navigation-content.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';

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
    SiteHeaderComponent,
    SiteFooterComponent,
  ],
  exports: [
    SiteHeaderComponent,
    FavoritesComponent,
    SideNavigationComponent,
    WorkspaceComponent,
    InboxComponent,
    SiteFooterComponent
  ]
})
export class FeaturesModule { }
