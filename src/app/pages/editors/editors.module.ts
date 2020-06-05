import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { EditorsComponent } from './editors.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    PdfViewerModule
  ],
  declarations: [
    EditorsComponent,
  ],
})
export class EditorsModule { }
