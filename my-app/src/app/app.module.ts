import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {boldDirective} from './directives/bold.directive';
import {whileDirective} from './directives/while.directive';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FactorialPipe } from './pipes/factorial.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { userService} from './services/user.service';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    boldDirective,
    whileDirective,
    FactorialPipe,
    JoinPipe,
    CatalogComponent,
    ContactUsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
