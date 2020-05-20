import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MatGridListModule, MatChipsModule} from '@angular/material';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CategoryComponent } from './category/category.component';
import { ImageCollection } from './image-collection.service';



@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    MatChipsModule
  ],
  providers: [ImageCollection],
  bootstrap: [AppComponent]
})
export class AppModule { }
