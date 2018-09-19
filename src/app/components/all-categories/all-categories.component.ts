import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Categories } from '../../models/categories';
import {CategoriesService} from '../../services/categories.service';
import {Project} from '../../models/project';
import {ProjectsService} from '../../services/projects.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  categories: Categories[];
  projects: Project[];
  browseCategory: Project[] = [];
  category: string;

  constructor(
    public categoriesService: CategoriesService,
    private projectService: ProjectsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // Get all categories
    this.categoriesService.getCategories().subscribe((categories: Categories[]) => this.categories = categories);

    this.projectService.getProjects().subscribe((projects: Project[]) => this.projects = projects);
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');

      this.browseCategory = (this.category) ?
        this.projects.filter(p => p.category === this.category) :
        this.projects;
    });
  }

}
