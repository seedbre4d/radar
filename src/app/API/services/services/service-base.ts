import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

export abstract class ServiceBase<T> {
  private path = '';

  constructor(
    path: string,
    protected firestore: AngularFirestore,
  ) {
    this.path = path;
  }

  get collection() {
    return this.firestore.collection(this.path);
  }

  get data(): Observable<T[]> {
    return this.collection
      .valueChanges({ idField: 'id' })
      .pipe(map((item) => (<unknown>item) as T[]));
  }

  get(id: string) {
    return this.collection
      .doc(id)
      .get()
      .pipe(finalize(() => this));
  }

  add(data: T) {
    return this.collection.add(data);
  }

  update(data: T) {
    return this.collection.doc((<any>data).id).update(data);
  }

  delete(id: string) {
    return this.collection.doc(id).delete();
  }
}
