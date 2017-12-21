import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

@IonicPage()
@Component({
  selector: 'page-android-course-material',
  templateUrl: 'android-course-material.html',
})
export class AndroidCourseMaterialPage {

  @Input()
  subTopic: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseAnalytics: FirebaseAnalytics) {


  	//	this.firebaseAnalytics.logEvent("Android_Course_Complete", { Actual_Time: '20 min', Planned_time: '30 min'})


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AndroidCourseMaterialPage');
  }

}
