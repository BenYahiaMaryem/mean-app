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
    _id: 0,
    name : 'book name',
    author : 'auhtor name' ,
    editionDate : 'j/m/y',
    price : 0 ,
    description : ' description',
    edition : 'edition',
    isDeleted : 0

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


/*getBookById(_id){
    var bookG=this.booksService.getBookById(_id)
    .subscribe(data => {
                console.log('Success getting book by id' + data)
                
            })
}*/
    removeBook(_id){
        var bookG=this.booksService.getBookById(_id)
    .subscribe(data => {
                this.book=data;
                this.book.isDeleted=1;
                this.booksService.removeBook(this.book).subscribe (data => {
                console.log('Success deleting ' + data);
                
            })
            })
         
         
        
     }
 updateBook(){
     var book = this.book;
      this.booksService.updateBook(book)
      .subscribe(data => {
                console.log('Success updating' + data)
                this.books.push(book);
            })
            
 }
 
}
