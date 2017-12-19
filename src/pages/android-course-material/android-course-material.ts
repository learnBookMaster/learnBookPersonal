import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-android-course-material',
  templateUrl: 'android-course-material.html',
})
export class AndroidCourseMaterialPage {

  @Input()
  subTopic: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AndroidCourseMaterialPage');
  }

}
