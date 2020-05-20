import { Bild } from './bild';

export class ImageCollection {

    images = this.loadImages();

    categories: any[] = this.loadCategories();
    uniqueId: number = this.loadUniqueId();

    loadImages(): Bild[] {
        let photos;
        if (localStorage.getItem("photos")) {
          photos = JSON.parse(localStorage.getItem("photos"));
          photos = photos.map(element => { 
            return new Bild(element.link,element.description,element.descriptionHidden);
            
          });
        } else {
          photos = [];
        }
        return photos;
      }


    loadCategories() {
        let categories;
        if(localStorage.getItem("categories")) {
            categories = JSON.parse(localStorage.getItem("categories"));

        }
        else {categories = [];}
        return categories;
    }


    loadUniqueId() {
        let uniqueId;
        if(localStorage.getItem("uniqueId")) {
            uniqueId = JSON.parse(localStorage.getItem("uniqueId"));

        }
        else {uniqueId = 0;}
        return uniqueId;
    }


}