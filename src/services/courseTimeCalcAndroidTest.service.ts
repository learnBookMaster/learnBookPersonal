import { Injectable }  from '@angular/core';

@Injectable()
export class CourseTimeCalcServiceAndroidTest{


private startTime: any;

setStartTime(){
  this.startTime = new Date();
}

getStartTime(){
  return this.startTime;
}

}
