import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import {ProjectsService} from '../../services/projects.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  projects: Project[];
  searchingMapProject: Project[] = [];

  constructor(
    public projectService: ProjectsService
  ) { }

  ngOnInit() {

    // Get all projects
    this.projectService.getProjects().subscribe((projects: Project[]) => this.projects = projects);

  }

  // get project from map country

  mapProject(country) {

    this.searchingMapProject = this.projects.filter(project => project.country.indexOf(country) !== -1);
    console.log(country);

  }

}
