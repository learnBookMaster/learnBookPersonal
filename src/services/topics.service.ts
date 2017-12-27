import { Injectable }  from '@angular/core';

@Injectable()
export class TopicsService{

constructor () {}

  private topics: {title: String, para1: String, desc: String, iconUrl: String, timeSpent: String, marksObtained: String}[] = [{
      title:"Android",
      para1:"Native, Platform dependent",
      desc:"Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers. Android was developed by the Open Handset Alliance, led by Google. This tutorial will teach you basic Android programming.",
      iconUrl:"assets/imgs/android.jpg",
      timeSpent:"0:00",
      marksObtained:"0"
    },
    {
      title:"Cordova",
      para1:"Hybrid, Platform independent",
      desc:"Cordova is a platform that is used for building mobile apps using HTML, CSS and JS. We can think of Cordova as a container for connecting our web app with native mobile functionalities . Web applications cannot use native mobile functionalities by default. This is where Cordova comes into picture. It offers a bridge for connection between web app and mobile device.",
      iconUrl:"assets/imgs/cordova.jpg",
      timeSpent:"0:00",
      marksObtained:"0"
     }];

  getTopics(){
    return this.topics;
  }

  setPercentage(percent,topic){
    if(topic == 'Android'){
      this.topics[0].marksObtained = percent;
    }else{
      this.topics[1].marksObtained = percent;
    }
  }

  setTimeSpent(time,topic){
      if(topic == 'Android'){
        this.topics[0].timeSpent = time;
      }else{
        this.topics[1].timeSpent = time;
      }
    }

}
