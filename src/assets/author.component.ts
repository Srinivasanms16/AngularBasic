import {Component} from '@angular/core'
import{service} from './Service' 

@Component({
    selector:'author',
    template:`<h4>{{title}}</h4>
    <ul>
    <li *ngFor = "let a of authours">
    {{a}}
    </li>
    </ul>`,
    providers:[service]
})
export class authorComponent{
    title:string='List of Authors';
    authours:string[];
    constructor(service:service)
    {
      this.authours = service.authors;
    }
}