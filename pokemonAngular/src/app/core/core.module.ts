import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SearchComponent,
  ],
  providers: [],
})
export class CoreModule {}
