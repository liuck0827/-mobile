import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingersPage } from './singers';

@NgModule({
  declarations: [
    SingersPage,
  ],
  imports: [
    IonicPageModule.forChild(SingersPage),
  ],
})
export class SingersPageModule {}
