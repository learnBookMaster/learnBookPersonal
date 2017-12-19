import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { ContentListPage } from '../content-list/content-list';

import { TopicsService } from '../../services/topics.service';
import { CourseTimeCalcServiceAndroid } from '../../services/courseTimeCalcAndroid.service';
import { CourseTimeCalcServiceCordova } from '../../services/courseTimeCalcCordova.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

    markPercent: string;
    topic: string;
    topics: {title: String, para1: String, desc: String, iconUrl: String, timeSpent: String, marksObtained: String}[] = this.topicsService.getTopics();

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private firebaseAnalytics: FirebaseAnalytics,
  public menuCtrl: MenuController,
  private topicsService: TopicsService,
  public courseTimeCalcServiceAndroid: CourseTimeCalcServiceAndroid,
  public courseTimeCalcServiceCordova: CourseTimeCalcServiceCordova) {
    // alert(JSON.stringify(this.firebaseAnalytics));
     //alert(this.firebaseAnalytics.logEvent("page_view",{page: "dashboard"}));

    this.firebaseAnalytics.logEvent('page_view', {page: "dashboard1"})
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

    this.firebaseAnalytics.logEvent('page_view', {page: "dashboard2"})
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

    this.firebaseAnalytics.logEvent('page_view3', {page: "dashboard"})
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

     this.firebaseAnalytics.logEvent('page_view4', {page: "dashboard1"})
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

     this.firebaseAnalytics.setCurrentScreen("setCurrentScreenVIPUL")
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

    

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter(){
      this.menuCtrl.enable(true, 'mainPageMenu');
       this.menuCtrl.enable(false, 'subTopic');
       this.topic = this.navParams.get('topic');
       if(this.navParams.get('markPercent')){
       this.markPercent = this.navParams.get('markPercent');
         this.topicsService.setPercentage(this.markPercent,this.topic);
       }
   }

   startCourse(topic: String){
    if(topic == 'Android'){
     this.courseTimeCalcServiceAndroid.setStartTime();
    }else{
     this.courseTimeCalcServiceCordova.setStartTime();
    }
    this.navCtrl.setRoot(ContentListPage,{topic: topic});
 }

  logout() {
    firebase.auth().signOut();
  }

}
