import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { AngularEditorModule } from '@kolkov/angular-editor';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { MaterialUiModule } from '../material-ui/material-ui.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';

const material_ui =[
    MatButtonModule ,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule  ,
    // AngularEditorModule,
    FormsModule,
    HttpClientModule,
    // NgxPaginationModule,
    MatCheckboxModule,
    // MaterialUiModule,
    // Ng2SearchPipeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatTreeModule,
    MatExpansionModule
]


@NgModule({
    imports: [material_ui],
    exports: [material_ui],
})
export class AngularMaterialUi { }
