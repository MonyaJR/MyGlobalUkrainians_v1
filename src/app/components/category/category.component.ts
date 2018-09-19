import {Component, OnInit, Input, Output, ViewChild} from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { CategoriesService } from '../../services/categories.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  projects: Project[];
  searchingCategories: Project[] = [];
  browseCategory: Project[] = [];
  searchCat: string;
  category: string;

  constructor(
    private route: ActivatedRoute,
    public projectService: ProjectsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {

    // Get all projects
    this.projectService.getProjects().subscribe((projects: Project[]) => this.projects = projects);

    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');

      this.browseCategory = (this.category) ?
        this.projects.filter(p => p.category === this.category) :
        this.projects;
      console.log(this.projects);
    });
  }



  searchCategories() {
    this.searchingCategories = this.projects.filter( project => project.name.toLowerCase().indexOf(this.searchCat.toLowerCase()) !== -1);
  }

}
