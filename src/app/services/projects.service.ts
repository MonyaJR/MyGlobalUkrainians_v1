import {Injectable, Input} from '@angular/core';
import { of } from 'rxjs/observable/of';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Project} from '../models/project';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectsService {

  projectsCollection: AngularFirestoreCollection<Project>;
  projectDoc: AngularFirestoreDocument<Project>;
  projects: Observable<Project[]>;
  project: Observable<Project>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.projectsCollection = this.afs.collection('projects');
  }

  // Get all project collection
  getProjects() {
    this.projects = this.projectsCollection.snapshotChanges().map(collection => {
      return collection.map(document => {
        const data = document.payload.doc.data() as Project;
        data.id = document.payload.doc.id;
        return data;
      });
    });

    return this.projects;
  }

  // Get project collection by id
  getProjectById(id: string) {
    this.projectDoc = this.afs.doc(`projects/${id}`);

    return this.projectDoc;
  }

  // Add project collection
  addProject(project: Project) {
    this.projectsCollection.add(project);

    return of(project);

  }

  // Edit project collection
  editProject(project: Project) {
    this.projectDoc = this.afs.doc(`projects/${project.id}`);
    this.projectDoc.update(project);
    console.log(project);

    return of(project);
  }

  // Delete project collection
  deleteProject(id: string) {
    this.projectDoc = this.afs.doc(`projects/${id}`);
    this.projectDoc.delete();
  }

}
