import { Injectable } from '@angular/core';
import { Countries } from '../models/countries';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Categories} from '../models/categories';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CountriesService {

  countriesColection: AngularFirestoreCollection<Countries>;
  country: Observable<Countries[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.countriesColection = this.afs.collection('countries');
  }

  // Get all countries collection
  getCountry() {
    this.country = this.countriesColection.snapshotChanges().map(collection => {
      return collection.map(document => {
        const data = document.payload.doc.data() as Countries;
        data.id = document.payload.doc.id;
        return data;
      });
    });

    return this.country;
  }

}
