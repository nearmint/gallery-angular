import { Component, OnInit } from '@angular/core';
import { ImageCollection } from '../image-collection.service';
import { MatDivider } from '@angular/material';
import * as uuid from 'uuid';
import { stringify } from 'querystring';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  uniqueId: number = this.imageCollection.uniqueId;
  addCategoryValue: string;
  categories: any[] = [];
  categoryOpen: number;

  constructor(private imageCollection: ImageCollection) { }

  ngOnInit() {
    this.categories = this.imageCollection.categories;
  }

  editCategory(index) {
this.categoryOpen = index;

  }

  saveCategory(event, category, i) {
    localStorage.setItem("categories", JSON.stringify(this.categories));
    this.categoryOpen = -5;
  }

  deleteCategory(i) {
    this.categories.splice(i, 1);
    localStorage.setItem("categories", JSON.stringify(this.categories));
  }

  addCategory() {
    this.categories.push([this.addCategoryValue, this.uniqueId]);
    localStorage.setItem("categories", JSON.stringify(this.categories));
    this.uniqueId++;
    localStorage.setItem("uniqueId", JSON.stringify(this.uniqueId))
    console.log(this.uniqueId);
  }

}
