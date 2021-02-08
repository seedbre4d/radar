import { NgModule } from '@angular/core';

import { SharedCommonModule } from '../shared-common.module';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [CoreComponent],
  imports: [CoreRoutingModule, SharedCommonModule]
})
export class CoreModule {}
