import { Component} from '@angular/core';
import { service } from './Service';

@Component({
selector:'employee',
templateUrl:'./employee.html',
providers:[service],
styleUrls:['./employee.css']
})
export class empoyeecomponent
{
employee:any;
constructor(ser:service)
{
    this.employee = ser.employee;
}
}
