import { Injectable }  from '@angular/core';

@Injectable()
export class CourseTimeCalcServiceCordova{


private startTime: any;

setStartTime(){
  this.startTime = new Date();
}

getStartTime(){
  return this.startTime;
}

}
