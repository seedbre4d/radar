import { NgModule } from '@angular/core';

import { SharedCommonModule } from '../shared-common.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [PersonListComponent],
  imports: [ PersonRoutingModule, SharedCommonModule]
})
export class PersonModule {}
