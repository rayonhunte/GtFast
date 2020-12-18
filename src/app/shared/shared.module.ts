import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// mmatrial 

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';

// sahred component 
import { ShellComponent } from './shell/shell.component';

const modules = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatTooltipModule,
  MatChipsModule,
  MatDividerModule,
  RouterModule
]

const components = [
 ShellComponent
]


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ...modules],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule { }
