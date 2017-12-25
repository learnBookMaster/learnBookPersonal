import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { HomePage } from '../home/home';
import { TestPage } from '../test/test';

import { CourseTimeCalcServiceAndroid } from '../../services/courseTimeCalcAndroid.service';
import { CourseTimeCalcServiceCordova } from '../../services/courseTimeCalcCordova.service';

import { CourseTimeCalcServiceAndroidTest } from '../../services/courseTimeCalcAndroidTest.service';
import { CourseTimeCalcServiceCordovaTest } from '../../services/courseTimeCalcCordovaTest.service';

@IonicPage()
@Component({
  selector: 'page-content-list',
  templateUrl: 'content-list.html',
})
export class ContentListPage {

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public menuCtrl: MenuController,
  public courseTimeCalcServiceAndroid: CourseTimeCalcServiceAndroid,
  public courseTimeCalcServiceCordova: CourseTimeCalcServiceCordova,
  public courseTimeCalcServiceAndroidTest: CourseTimeCalcServiceAndroidTest,
  public courseTimeCalcServiceCordovaTest: CourseTimeCalcServiceCordovaTest,
  private firebaseAnalytics: FirebaseAnalytics) {
  }

  topic: string;
  subTopic: string;
  currentIndex: number;
  subTopicArrayLength: number;
  topicCovered: number[] = [];

  subTopics:{Android: string[],Cordova: string[]} ={
    Android:[
      'Architecture', 'Activities', 'Services', 'Content Providers', 'Broadcast Receivers', 'Intents and Filters'
    ],
    Cordova:[
      'Introduction', 'Hybrid Mobile Application Architecture', 'Hybrid Mobile Application Development Tools', 'RestFull Webservices to Fetch/Send Data', 'Sample Ionic Mobile Application'
    ]
  };

  ionViewDidLoad() {
    this.topic = this.navParams.get('topic');
    this.subTopic = this.subTopics[this.topic][0];
    this.currentIndex = 0;
    this.topicCovered.push(0);
    this.subTopicArrayLength = this.subTopics[this.topic].length;
    console.log('ionViewDidLoad ContentListPage: '+this.navParams.get('topic'));
  }

   ionViewWillEnter(){
      this.menuCtrl.enable(true, 'subTopic');
      this.menuCtrl.enable(false, 'mainPageMenu');
   }

  subTopicSelected(subTopic: string){
      this.subTopic = subTopic;
      this.currentIndex = this.subTopics[this.topic].indexOf(this.subTopic);
      if(this.topicCovered.indexOf(this.currentIndex)==-1){
        this.topicCovered.push(this.currentIndex);
      }
      this.menuCtrl.toggle();
  }

  changeSubTopic(direction: string){
     this.currentIndex = this.subTopics[this.topic].indexOf(this.subTopic);
     if(direction == 'prev'){
       this.currentIndex = this.currentIndex-1;
     }
     if(direction == 'next')
     {
       this.currentIndex = this.currentIndex+1;
     }
     this.subTopic = this.subTopics[this.topic][this.currentIndex];
     if(this.topicCovered.indexOf(this.currentIndex)==-1){
       this.topicCovered.push(this.currentIndex);
     }
  }

  swipeEvent(e) {
    if(e.direction == '2'){
       if(this.currentIndex<this.subTopics[this.topic].length-1)
       this.currentIndex = this.currentIndex+1;
    }
    else if(e.direction == '4'){
       if(this.currentIndex!=0)
       this.currentIndex = this.currentIndex-1;
    }
    this.subTopic = this.subTopics[this.topic][this.currentIndex];
     if(this.topicCovered.indexOf(this.currentIndex)==-1){
       this.topicCovered.push(this.currentIndex);
     }
  }

  goHome(){
    var minutes;
    if(this.topic == 'Android'){

          /*firbase analysis code*/

            let stopTime:any = new Date();
            var startTime = this.courseTimeCalcServiceAndroid.getStartTime();
            var diff = Math.abs(startTime - stopTime);
            var seconds = Math.floor((diff/1000));
            minutes = Math.floor((diff/1000)/60);
            var hour = minutes/60;
            var days = Math.round(minutes/1440);


            console.log("Course completed in :");
            console.log("Seconds - " +seconds);
            console.log("Minutes - " +minutes);
            console.log("Hour - " +hour);
            console.log("Days - " +days);

            this.firebaseAnalytics.logEvent("Android_Course_Complete", { Actual_Time: minutes+' min', Planned_time: '30 min'})
                .then((res: any) => console.log(res))
                .catch((error: any) => console.error(error));


          /*done firebase analysis*/

         }else{
         /*firbase analysis code*/

                 let stopTime:any = new Date();
                 var startTime = this.courseTimeCalcServiceCordova.getStartTime();
                 var diff = Math.abs(startTime - stopTime);
                 var seconds = Math.floor((diff/1000));
                 minutes = Math.floor((diff/1000)/60);
                 var hour = minutes/60;
                 var days = Math.round(minutes/1440);


                 console.log("Course completed in :");
                 console.log("Seconds - " +seconds);
                 console.log("Minutes - " +minutes);
                 console.log("Hour - " +hour);
                 console.log("Days - " +days);

                 this.firebaseAnalytics.logEvent("Cordova_Course_Complete", { Actual_Time: minutes+' min', Planned_time: '30 min'})
                           .then((res: any) => console.log(res))
                           .catch((error: any) => console.error(error));


               /*done firebase analysis*/



  }
  this.navCtrl.setRoot(HomePage,{
          timeSpent: minutes+' min',
          topic: this.topic
      });
  }

  startTest(){
    if(this.topic == 'Android'){

      /*firbase analysis code*/

        let stopTime:any = new Date();
        var startTime = this.courseTimeCalcServiceAndroid.getStartTime();
        var diff = Math.abs(startTime - stopTime);
        var seconds = Math.floor((diff/1000));
        var minutes = Math.floor((diff/1000)/60);
        var hour = minutes/60;
        var days = Math.round(minutes/1440);


        console.log("Course completed in :");
        console.log("Seconds - " +seconds);
        console.log("Minutes - " +minutes);
        console.log("Hour - " +hour);
        console.log("Days - " +days);

          this.firebaseAnalytics.logEvent("Android_Course_Complete", { Actual_Time: minutes+' min', Planned_time: '30 min'})
            .then((res: any) => console.log(res))
            .catch((error: any) => console.error(error));

      /*done firebase analysis*/

      this.courseTimeCalcServiceAndroidTest.setStartTime();
     }else{
     /*firbase analysis code*/

             let stopTime:any = new Date();
             var startTime = this.courseTimeCalcServiceCordova.getStartTime();
             var diff = Math.abs(startTime - stopTime);
             var seconds = Math.floor((diff/1000));
             var minutes = Math.floor((diff/1000)/60);
             var hour = minutes/60;
             var days = Math.round(minutes/1440);


             console.log("Course completed in :");
             console.log("Seconds - " +seconds);
             console.log("Minutes - " +minutes);
             console.log("Hour - " +hour);
             console.log("Days - " +days);

             this.firebaseAnalytics.logEvent("Cordova_Course_Complete", { Actual_Time: minutes+' min', Planned_time: '30 min'})
                                  .then((res: any) => console.log(res))
                                  .catch((error: any) => console.error(error));

           /*done firebase analysis*/

      this.courseTimeCalcServiceCordovaTest.setStartTime();
     }
    this.navCtrl.setRoot(TestPage,{topic: this.topic});
  }

}
