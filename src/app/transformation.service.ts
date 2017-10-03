import { Injectable } from '@angular/core';
import { Application } from './application';
import { Category } from './category';

@Injectable()
export class TransformationService {

  constructor() { }

  toArrayOfCategories(children : any[]){
    let categories : Category[] = [];
    
    children.forEach(child => {     
      let index = this.findCategoryByName(child.data.audience_target, categories); 
      let newApplication = this.toApplication(child.data);
      if (index >= 0){
        categories[index].applications.push(newApplication);
      }
      else{
        let newCategory : Category;
        newCategory = this.toCategory(child.data);
        newCategory.applications.push(this.toApplication(child.data));
        categories.push(newCategory);
      }
    });
    return categories;
  }

  findCategoryByName(name : string, categories : Category[]){
    for (var index = 0; index < categories.length; index++) {
      var element = categories[index]; 
      if(element.audience_target == name){
        return index;
      }     
    }
    return -1;

  }

  toApplication(data : any){
    let application : Application;
    application = {
        banner_img : data.banner_img,
        description_html : data.description_html,
        display_name : data.display_name,
        display_name_prefixed : data.display_name_prefixed,
        header_img : data.header_img,
        id : data.id,
        submit_text : data.submit_text,
        submit_text_html : data.submit_text_html,
        title : data.title,
        public_description_html : data.public_description_html
    }
    return application;
  }  

  toCategory(data : any){
    let category : Category;
    category = {
      audience_target: data.audience_target,
      icon_img: data.icon_img,
      header_title: data.header_img,
      description: data.description,
      key_color : data.key_color,
      applications : []
    }
    return category;
  }  
}
