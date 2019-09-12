import { Component} from '@angular/core'

@Component({
    selector:'form',
    templateUrl: './form.component.html'
})
export class formCompotent{
    enterauthor: string = "Enter the Author Name:";
       bookName : string = "";
       authorName:string = "";
       enterbook : string="Enter the Book Name:"
       onSubmit():void{
           alert("book entered is " + this.bookName);
           alert("Author entered is "+ this.authorName);
       }
}