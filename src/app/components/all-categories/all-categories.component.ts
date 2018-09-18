import { Component, OnInit } from '@angular/core';
import { Categories } from '../../models/categories';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  categories: Categories[];

  constructor(
    public categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    // Get all categories
    this.categoriesService.getCategories().subscribe((categories: Categories[]) => this.categories = categories);
  }

}
