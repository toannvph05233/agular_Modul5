import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './list-book/list-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DetailedBookComponent } from './detailed-book/detailed-book.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { DeleteBooksComponent } from './delete-books/delete-books.component';
import {RouterModule, Routes} from '@angular/router';


const router: Routes = [
  {
    path: '',
    component: ListBookComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'edit',
    component: EditBookComponent
  }
  ,
  {
    path: 'detaile',
    component: DetailedBookComponent
  }
  ,
  {
    path: 'delete',
    component: DeleteBooksComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    EditBookComponent,
    CreateBookComponent,
    DetailedBookComponent,
    DeleteBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
