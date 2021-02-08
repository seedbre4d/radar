import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { PersonModel } from '../models/person.model';
import { ServiceBase } from './service-base';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends ServiceBase<PersonModel> {
  constructor(firestore: AngularFirestore) {
    super('person', firestore);
  }
}
