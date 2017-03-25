import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
categories: any = [];

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit() {
        // Retrieve categories from the API
        this.categoriesService.getAllCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

}
