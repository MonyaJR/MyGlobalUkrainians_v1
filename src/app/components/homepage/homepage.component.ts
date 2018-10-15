import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Project } from '../../models/project';
import {ProjectsService} from '../../services/projects.service';
import * as SvgPanZoom from 'svg-pan-zoom';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {

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

  ngAfterViewInit() {

    const svgPanZoom: SvgPanZoom.Instance = SvgPanZoom('#homeMap', {

      viewportSelector: '.svg-pan-zoom_viewport',
      panEnabled: true,
      controlIconsEnabled: true,
      zoomEnabled: false,
      dblClickZoomEnabled: true,
      mouseWheelZoomEnabled: true,
      preventMouseEventsDefault: true,
      zoomScaleSensitivity: 0.2,
      minZoom: 0.5,
      maxZoom: 10,
      fit: true,
      contain: true,
      center: true,
      refreshRate: 'auto'

    });

  }
}
