import { Component, OnInit } from '@angular/core';
import { ImageCollection } from '../image-collection.service';
import { MatDivider } from '@angular/material';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  uniqueId: number = this.imageCollection.uniqueId;
  addCategoryValue: string;
  categories: any[] = [];

  constructor(private imageCollection: ImageCollection) { }

  ngOnInit() {
    this.categories = this.imageCollection.categories;
  }

  editCategory(event, category) {
event.path[1].style.display = 'none';
document.getElementById(`${category}2`).style.display = 'inline'; 
  }

  saveCategory(event, category, i) {
    event.path[1].style.display = 'none';
    document.getElementById(`${category}1`).style.display = 'inline'; 
    this.categories[i] = (<HTMLInputElement>document.getElementById(`${category}2-2`)).value;
    localStorage.setItem("categories", JSON.stringify(this.categories));
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
  }

}
