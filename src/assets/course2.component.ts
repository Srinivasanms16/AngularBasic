import {Component} from '@angular/core'

@Component({
    selector:"course2",
    template:`
    <h5>{{CourseEnd}}</h5>
    `
})
export class course2{
    propertybinding:string ="my property binding";
    CourseEnd:string ="Please select one from above courses";
    name : string = "Mr.Srinivasan";
    myfirstclick():void{
        alert(this.name);
    }
}