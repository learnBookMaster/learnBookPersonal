import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { TestService } from '../../services/test.service';
import { ResultPage } from '../result/result';

import { CourseTimeCalcServiceAndroidTest } from '../../services/courseTimeCalcAndroidTest.service';
import { CourseTimeCalcServiceCordovaTest } from '../../services/courseTimeCalcCordovaTest.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  topic: string;
  testOperation: any;
  testJson: any;
  pageIndex: number;
  counter: number = 10*60;
  displayTime: string;
  countDown;
  disableSubmitTest: boolean = true;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private testService: TestService,
  public courseTimeCalcServiceAndroidTest: CourseTimeCalcServiceAndroidTest,
  public courseTimeCalcServiceCordovaTest: CourseTimeCalcServiceCordovaTest,
  private firebaseAnalytics: FirebaseAnalytics) {
     this.countDown = Observable.timer(0,1000)
          .take(this.counter)
          .map(() =>{
          this.displayTime = new Date(this.counter * 1000).toISOString().substr(14, 5);
            if(this.counter==1){
              this.submitTest();
            }else{
              --this.counter;
            }
          }
          );

      }

  ionViewDidLoad() {
    this.topic = this.navParams.get('topic');
    console.log('ionViewDidLoad TestPage');
    this.testOperation=this.testService.getTest(this.topic);
    this.pageIndex=0;
    this.testOperation.subscribe(
      res =>{
        this.testJson=res;
      },
      err =>{
        console.log("Error Fetching test "+err);
      }
     );
  }

  pickQues(direction: string){
    if(direction=='prev'){
      this.pageIndex = this.pageIndex-1;
    }else if(direction=='next'){
      this.pageIndex = this.pageIndex+1;
    }
  }

  onAnswerSelect(selectedAns: string){
    this.testJson[this.pageIndex].answered = selectedAns;
    if(this.pageIndex==this.testJson.length-1){
        this.disableSubmitTest = false;
    }
  }

  submitTest(){
    let result: number = 0;
    let resultPercent: any = 0;
    let timespent: string = "0 min";
    for(let test of this.testJson) {
      if(test.answered==test.answer){
        result=result+1;
      }
    }
    resultPercent = (result/this.testJson.length)*100;

    let resultText: string = 'Passed';
    if(resultPercent < 70){
      resultText = 'Failed';
    }

    if(this.topic == 'Android'){
      /*firbase analysis code*/

       let stopTime:any = new Date();
       var startTime = this.courseTimeCalcServiceAndroidTest.getStartTime();
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


       this.firebaseAnalytics.logEvent("Android_Test_Complete", { Score_Obtained:  resultPercent, Passing_Score: '40', Result:  resultText, _Actual_test_time: minutes+' min',Planned_test_time: '30 min'})   
       .then((res: any) => console.log(res))
       .catch((error: any) => console.error(error));
        timespent =   minutes+' min';

     /*done firebase analysis*/

     }else{
       /*firbase analysis code*/

             let stopTime:any = new Date();
             var startTime = this.courseTimeCalcServiceCordovaTest.getStartTime();
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

                            
             this.firebaseAnalytics.logEvent("Hybrid_Test_Complete", { Score_Obtained:  resultPercent, Passing_Score: '40', Result:  resultText, Actual_test_time: minutes+' min',Planned_test_ime: '30 min'})
            .then((res: any) => console.log(res))
             .catch((error: any) => console.error(error));

              timespent =   minutes+' min';
           /*done firebase analysis*/
     }


    this.navCtrl.setRoot(ResultPage,{result: resultPercent, topic: this.topic, timeSpent: timespent});
  }

}
