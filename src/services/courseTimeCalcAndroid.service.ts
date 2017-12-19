import { Injectable }  from '@angular/core';

@Injectable()
export class CourseTimeCalcServiceAndroid{



private startTime: any;


setStartTime(){
  this.startTime = new Date();
}

getStartTime(){
  return this.startTime;
}

}
