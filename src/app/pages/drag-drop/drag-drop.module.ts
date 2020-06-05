import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragDropComponent } from './drag-drop.component';

import { DragDropFileUploadDirective } from '../drag-drop-file-upload.directive';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [
    DragDropComponent,
    DragDropFileUploadDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbCardModule,
    ThemeModule,
  ],
  providers: [],
  bootstrap: [DragDropComponent]
})
export class DragDropModule { }
