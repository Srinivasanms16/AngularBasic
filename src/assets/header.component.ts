import {Component, Input} from '@angular/core'
import{ service } from './Service'



@Component({
    selector:'header',
    template:`<div style="text-align:center">
    <h1>
      Welcome to {{ title}} {{ lastname}}!
    </h1>
  </div>`,
  providers:[service]
})
export class header{
title:string;
@Input()
lastname:string;
constructor(ser:service)
{
    this.title = ser.name;
}
}