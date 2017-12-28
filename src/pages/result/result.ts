import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  message: string;
  imageSuccess: string;
  markPercent: number;
  topic: string;
  timeSpent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad ResultPage');
      this.message="Congratulations!! successfully cleared";
      this.imageSuccess="checkmark-circle-outline";
      this.markPercent = this.navParams.get('result');
      this.topic = this.navParams.get('topic');
      this.timeSpent = this.navParams.get('timeSpent');
      if(this.markPercent < 50){
        this.message = "Minimum passing score is 50";
        this.imageSuccess = "close-circle";
      }
    }

  goHome(){
    this.navCtrl.setRoot(HomePage,{markPercent: this.markPercent, topic: this.topic, timeSpent: this.timeSpent});
  }

  }

