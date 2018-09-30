import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Categories } from '../models/categories';
import { Countries } from '../models/countries';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoriesService {
  categoriesCollection: AngularFirestoreCollection<Categories>;
  categoryDoc: AngularFirestoreDocument<Categories>;
  categories: Observable<Categories[]>;
  category: Observable<Categories>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.categoriesCollection = this.afs.collection('categories');
  }

  // Get all categories collection
  getCategories() {
    this.categories = this.categoriesCollection.snapshotChanges().map(collection => {
      return collection.map(document => {
        const data = document.payload.doc.data() as Categories;
        data.id = document.payload.doc.id;
        return data;
      });
    });

    return this.categories;
  }


}
