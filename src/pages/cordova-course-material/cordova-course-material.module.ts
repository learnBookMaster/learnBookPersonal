import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CordovaCourseMaterialPage } from './cordova-course-material';

@NgModule({
  declarations: [
    CordovaCourseMaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(CordovaCourseMaterialPage),
  ],
})
export class CordovaCourseMaterialPageModule {}
