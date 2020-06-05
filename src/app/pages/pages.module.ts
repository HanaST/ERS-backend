import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
//import { TablesModule } from './tables/tables.module';
import { PagesRoutingModule } from './pages-routing.module';

import { DragDropComponent } from './drag-drop/drag-drop.component';

import { DragDropFileUploadDirective } from './drag-drop-file-upload.directive';

import { ReactiveFormsModule } from '@angular/forms';
  

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ReactiveFormsModule
    //TablesModule,
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
