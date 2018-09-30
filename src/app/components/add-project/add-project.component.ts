import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService} from '../../services/projects.service';
import { Project} from '../../models/project';
import { IdService } from '../../services/id.service';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { Countries } from '../../models/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  cat: Categories[];
  country: Countries[];
  project: Project = {
    name: '',
    // user: '',
    description: '',
    category: '',
    country: '',
    date: null,
    link: ''
  };

  constructor(
    public categoriesService: CategoriesService,
    public projectsService: ProjectsService,
    public countryService: CountriesService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public idService: IdService
  ) { }

  ngOnInit() {
    this.project.id = this.idService.generate();
    this.project.date = Date.now();
    //  get all category
    this.categoriesService.getCategories().subscribe((cat: Categories[]) => this.cat = cat);
    // get all country
    this.countryService.getCountry().subscribe((country: Countries[]) => this.country = country);
  }

  addProject() {
    this.projectsService.addProject(this.project).subscribe((project: Project) => {
      if (project) {
        this.router.navigate(['/all-projects']);
      }
    });
  }

  closeProject() {
    this.router.navigate(['/all-projects']);
  }

  changeCategory(event) {
    this.project.category = event.target.value;
  }

  changeCountry(event) {
    this.project.country = event.target.value;
  }

}
