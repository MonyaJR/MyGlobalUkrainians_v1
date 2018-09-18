import {Component, OnInit} from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { AuthService } from '../../services/auth.service';
import {auth} from 'firebase';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {
  projects: Project[];
  searchingResult: Project[] = [];
  searchText: string;
  userName: string;

  constructor(
    public projectService: ProjectsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Get all projects
    this.projectService.getProjects().subscribe((projects: Project[]) => this.projects = projects);
    this.authService.checkAuth().subscribe(auth => {
      if (auth) {
        this.userName = auth.email;
      }
    });
  }
  searchProject() {
    this.searchingResult = this.projects.filter( project => project.name.toLowerCase().indexOf(this.searchText) !== -1);
  }

  deleteProject(id: string) {
    if (confirm('Ви дійсно хочете видалити категорію?')) this.projectService.deleteProject(id);
  }

}
