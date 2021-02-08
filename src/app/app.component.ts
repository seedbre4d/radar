import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.items = firestore
      .collection('items')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((res, index) => {
          console.log(res, index);
          return res;
        })
      );
  }

  addItem() {
    this.firestore.collection('items').add({ date: Date.now() });
  }
}
