import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [LayoutComponent],
  exports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutComponent
  ]
})
export class SharedCommonModule {}
