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

  addCategoryToImage(index) {
    if(this.addCategory[index] === true) {
      this.addCategory[index] = false;
    }
    else {
    this.addCategory[index] = true;
    }

  }

  filterCategories(cat) {
    console.log(cat);
    console.log(this.images);
    this.showImages = this.images.filter(image => image.category.includes(cat));
  }

  resetFilter() {
    this.showImages = this.imageCollection.images;
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

  // for (let i = 0; i < this.images.length; i+=6) {
  //   let repeat = Math.floor(this.images.length/6);
  //   console.log(repeat);
  //   if (i === repeat) {
  //     let str = "this.newImages.push([";
  //     for(let e=(repeat*6); e < (this.images.length % 6); e++) {
  //       str += `this.images[${e}],`;
  //       console.log(str);
  //     }

  //     str += "]);";
  //   eval(str);
  //   console.log(this.newImages);
  //   }
  //   else {
  //   this.newImages.push([this.images[i],this.images[i+1],this.images[i+2],this.images[i+3],this.images[i+4],this.images[i+5]]);
  //   }
  // }

  // console.log(this.newImages);
  // console.log(this.newImages[this.page-1]);

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
    //let el = <HTMLInputElement> document.getElementById("exampleCheck1");
    //this.bild = new Bild(`${(<HTMLInputElement>document.getElementById("link")).value}`,`${(<HTMLInputElement>document.getElementById("beschreibung")).value}`,el.checked)
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
    //this.emptyString = null;
    this.bild = new Bild();
  
    this.formShow = !this.formShow;
    this.newImages = [];
    // for (let i = 0; i < this.images.length; i+=6) {
    //   let repeat = Math.floor(this.images.length/6);
    //   console.log(repeat);
    //   if (i/6 === repeat) {
    //     let str = "this.newImages.push([";
    //     for(let e=(repeat*6); e < ((repeat*6)+(this.images.length % 6)); e++) {
    //       str += `this.images[${e}],`;
    //       console.log(str);
    //     }
  
    //     str += "]);";
    //   eval(str);
    //   console.log(this.newImages);
    //   }
    //   else {
    //   this.newImages.push([this.images[i],this.images[i+1],this.images[i+2],this.images[i+3],this.images[i+4],this.images[i+5]]);
    //     console.log(this.newImages);
    // }
    // }

    localStorage.setItem("photos", JSON.stringify(this.images));
    console.log(this.images.length);
    this.addCategory = [];
  }

  ngOnInit() {

   this.showImages = this.images;

  }



  newImages = [];

//  images = ['https://images.freeimages.com/images/large-previews/851/poppies-1369329.jpg', 'https://images.freeimages.com/images/large-previews/9f7/wanna-beer-1056482.jpg', 'https://images.freeimages.com/images/large-previews/cd8/bright-red-sunset-1446856.jpg', 'https://images.freeimages.com/images/large-previews/456/skyscraper-1-1523706.jpg'];

}
