import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class BooksService {

  constructor(private http: Http) { }

getAllBooks(){
  return this.http.get('/api/books')
            .map(res => res.json());

}

addBook(book){
var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/books", JSON.stringify(book), { headers: headers }) .map(response => response.json());
}

/*removeBook(_id){
return this.http.put("/api/books/"+ _id)
                .map(response => response.json());
     }
}*/


updateBook(){
  
}
}
