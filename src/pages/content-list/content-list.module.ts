import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentListPage } from './content-list';

import { AndroidCourseMaterialPage } from '../android-course-material/android-course-material';

@NgModule({
  declarations: [
    ContentListPage,
    AndroidCourseMaterialPage
  ],
  imports: [
    IonicPageModule.forChild(ContentListPage)
  ],
  entryComponents: [
      AndroidCourseMaterialPage
  ]
})
export class ContentListPageModule {}
