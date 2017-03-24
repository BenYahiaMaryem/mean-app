import { Component} from '@angular/core';
import { NgForm } from "@angular/forms";

import {BooksService} from '../books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent {

books :any=[];

book = {
    name : 'book name',
    author : 'auhtor name' ,
    editionDate : 'j/m/y',
    price : 0 ,
    description : ' description',
    edition : 'edition'

}
constructor(private booksService: BooksService) {  
     this.booksService.getAllBooks().subscribe(books => {
            this.books = books;})
    }
 addBook(){
        var book = this.book;
        this.booksService.addBook(book)
            .subscribe(data => {
                console.log('Success' + data)
                this.books.push(book);
            })
    }


    /*removeBook(_id){
        this.booksService.removeBook(_id).subscribe (data => {
                console.log('Success deleting ' + data);
                
            })
    
    }*/
 
 
}
