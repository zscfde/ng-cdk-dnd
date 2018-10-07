import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CdkDragDropComponent } from './cdk-drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    CdkDragDropComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [CdkDragDropComponent]
})
export class AppModule { }
