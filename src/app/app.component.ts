import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  content: string = 'A new world is waiting for you!';
  image: string = 'http://cdn.playbuzz.com/cdn/2ddbb298-d6a1-41d2-8fbd-2622d90d9f6c/6a7d5165-d267-4138-bd4e-165b169c9119.jpg'
}
