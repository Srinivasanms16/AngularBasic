import{Component} from '@angular/core'
import{ service} from './Service'


@Component({
    selector:'footer',
    template:`<h4>powered by {{developer}}`,
    providers:[service]
    
})

export class footer{

    developer:string ;
constructor(ser:service)
{
    this.developer = ser.developer;
}
}