import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService} from '../../services/projects.service';
import { Project} from '../../models/project';
import { IdService } from '../../services/id.service';
import {Categories} from '../../models/categories';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  cat: Categories[];
  selectedCategory: string = '';
  project: Project = {
    name: '',
    // user: '',
    description: '',
    category: '',
    date: null,
    link: ''
  };

  constructor(
    public categoriesService: CategoriesService,
    public projectsService: ProjectsService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public idService: IdService
  ) { }

  ngOnInit() {
    this.project.id = this.idService.generate();
    this.project.date = Date.now();
  //  get all category
    this.categoriesService.getCategories().subscribe((cat: Categories[]) => this.cat = cat);
  }

  addProject() {
    this.projectsService.addProject(this.project).subscribe((project: Project) => {
      if (project) {
        this.router.navigate(['/all-projects']);
      }
    });
  }

  changeCategory(event) {
    // this.selectedCategory = event.target.value;
    this.project.category = event.target.value;
  }

}
