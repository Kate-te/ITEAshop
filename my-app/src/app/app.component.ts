import { Component } from '@angular/core';

export class NavItems{
  name: string;
  link:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: string = 'my best ever shop';

  navItems: NavItems[] = [
    {name: "Home", link: "Home"},
    {name: "Catalog", link: "Catalog"},
    {name: "Contact Us", link: "ContactUs"}
  ]

}
