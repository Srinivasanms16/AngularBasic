import {Component} from '@angular/core'
import {service} from './Service'

@Component({
    selector:'course',
    template:`<h4>{{title}}</h4>
    <ul>
    <li *ngFor = "let c of courses">
    {{c}}
    </li>
    </ul>
    <course2></course2>`,
    providers:[service]
}) 
export class courseComponent{

    title:string = 'List of Courses';
    courses:string[];
    constructor(service:service){
        this.courses = service.courses;
    }

}