import {Component, OnInit} from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { AuthService } from '../../services/auth.service';
import {CategoriesService} from '../../services/categories.service';
import {Categories} from '../../models/categories';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {
  projects: Project[];
  categories: Categories[];
  browseCategory: Project[] = [];
  searchingResult: Project[] = [];
  searchText: string;
  userName: string;
  category: string;

  constructor(
    public projectService: ProjectsService,
    public categoriesService: CategoriesService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get all projects
    this.projectService
      .getProjects().switchMap((projects: Project[]) => {
      this.projects = projects;

      return this.route.queryParamMap;
    })
      .subscribe(params => {
        this.category = params.get('category');

        this.browseCategory = (this.category) ?
          this.projects.filter(p => p.category === this.category) :
          this.projects;
    });
    this.authService.checkAuth().subscribe(auth => {
      if (auth) {
        this.userName = auth.email;
      }
    });

    // Get all categories
    this.categoriesService.getCategories().subscribe((categories: Categories[]) => this.categories = categories);

  }
  searchProject() {
    this.searchingResult = this.projects.filter( project => project.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1);
  }

  deleteProject(id: string) {
    if (confirm('Ви дійсно хочете видалити категорію?')) this.projectService.deleteProject(id);
  }

}
