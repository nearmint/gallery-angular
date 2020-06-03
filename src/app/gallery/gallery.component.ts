import { Component, OnInit } from '@angular/core';
import { Bild } from '../bild';
import { ImageCollection } from '../image-collection.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  page = 1;
  images: Bild[] = this.imageCollection.images;
  showImages: Bild[] = this.images;

  addCategory: boolean[] = [];

  addCategoryToImage(index, ev) {
    console.log('addCategory', index, ev.target.checked);
    this.addCategory[index] = ev.target.checked;

  }

  filterCategories(cat) {
    console.log(cat);
    console.log(this.images);
    this.showImages = this.images.filter(image => image.category.includes(cat));
  }

  resetFilter() {
    this.showImages = this.imageCollection.images;
    console.log(this.showImages);
  }
 


  public bild: Bild;
 
  categories: string[] = this.imageCollection.categories;
  constructor(private imageCollection: ImageCollection) {
   

 if(this.images.length === 0) {
  this.bild = new Bild('https://images.freeimages.com/images/large-previews/851/poppies-1369329.jpg',"I'm cool",false);
  this.images.push(this.bild);

  this.bild = new Bild('https://images.freeimages.com/images/large-previews/9f7/wanna-beer-1056482.jpg',"I'm uncool",true);
  this.images.push(this.bild);

  this.bild = new Bild('https://images.freeimages.com/images/large-previews/cd8/bright-red-sunset-1446856.jpg',"Blubb",false);
  this.images.push(this.bild);

  this.bild = new Bild('https://images.freeimages.com/images/large-previews/456/skyscraper-1-1523706.jpg',"Ich bin der letzte",true);
  this.images.push(this.bild);


 
 }
 this.bild = new Bild();
  }

  emptyString = "";
  formShow = false;

  formShowFunction() {
    if (this.formShow) {
      return "inline"
    }
    return "none"
  }

  priorPage() {
    this.page -= 1;
  }

  nextPage() {
    this.page += 1;

  }

  addImage() {
    console.log(this.addCategory);
    this.bild.category = [];
    for(let e = 0; e < this.addCategory.length; e++) {
      if (this.addCategory[e] === true) {
        console.log(this.categories[e][1]);
        this.bild.category.push(this.categories[e][1]);
      }

    }
   
    this.images.push(this.bild);
    console.log(this.bild);
    this.bild = new Bild();
  
    this.formShow = !this.formShow;
    this.newImages = [];
    localStorage.setItem("photos", JSON.stringify(this.images));
    console.log(this.images.length);
    this.addCategory = [];

  }

  ngOnInit() {

   this.showImages = this.images;

  }



  newImages = [];


}
