import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, JsonpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { FirebaseuiProvider } from '../providers/firebaseui/firebaseui';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { ContentListPage } from '../pages/content-list/content-list';
import { AndroidCourseMaterialPage } from '../pages/android-course-material/android-course-material';
import { CordovaCourseMaterialPage } from '../pages/cordova-course-material/cordova-course-material';
import { TestPage } from '../pages/test/test';
import { ResultPage } from '../pages/result/result';


import { TestService } from '../services/test.service';
import { TopicsService } from '../services/topics.service';
import { CourseTimeCalcServiceAndroid } from '../services/courseTimeCalcAndroid.service';
import { CourseTimeCalcServiceAndroidTest } from '../services/courseTimeCalcAndroidTest.service';
import { CourseTimeCalcServiceCordova } from '../services/courseTimeCalcCordova.service';
import { CourseTimeCalcServiceCordovaTest } from '../services/courseTimeCalcCordovaTest.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ContentListPage,
    AndroidCourseMaterialPage,
    CordovaCourseMaterialPage,
    TestPage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ContentListPage,
    AndroidCourseMaterialPage,
    CordovaCourseMaterialPage,
    TestPage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseuiProvider,
    FirebaseAnalytics,
    TestService,
    TopicsService,
    CourseTimeCalcServiceAndroid,
    CourseTimeCalcServiceAndroidTest,
    CourseTimeCalcServiceCordova,
    CourseTimeCalcServiceCordovaTest
  ]
})
export class AppModule {}
