// Imports commented out for brevity
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './categories.service';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books.service';
import { ClientsComponent } from './clients/clients.component';
import { ClientsService } from './clients/clients.service';

// Define the routes
const ROUTES = [
    {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path: 'clients',
        component: ClientsComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
     CategoriesComponent,
     BooksComponent,
     ClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [CategoriesService,BooksService,ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
