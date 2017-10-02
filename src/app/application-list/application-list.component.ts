import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TransformationService } from '../transformation.service';
import { Category } from '../category';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
data: any;
categories : Category[] = [];

  constructor(private service : DataService, private transformationService: TransformationService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getApplications()
    .subscribe(jsonData => {
      this.data = jsonData['data']['children'];    
      this.categories = this.transformationService.toArrayOfCategories(this.data);
    });  
  }    

}
