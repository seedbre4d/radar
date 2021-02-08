import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonModel } from 'src/app/API/services/models/person.model';
import { PersonService } from 'src/app/API/services/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  data = this.service.data;
  item = new PersonModel();

  constructor(private service: PersonService) {}

  async add() {
    await this.service.add({ ...this.item });
    this.item = new PersonModel();
  }

  async update() {
    if (!this.item.id) return;
    const res = await this.service.update(this.item);
    console.log(res);
  }

  async delete(id: string) {
    await this.service.delete(id);
  }

  switchToAdd(form: NgForm) {
    this.item = new PersonModel();
    form.reset();
  }

  save(form: NgForm) {
    if (form.invalid) return;

    if (this.item.id) this.update();
    else this.add();
  }

  edit(item: PersonModel) {
    this.item = this.item.id === item.id ? new PersonModel() : { ...item };
  }
}
