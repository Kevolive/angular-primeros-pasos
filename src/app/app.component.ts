import { Component } from '@angular/core';
import { HeroComponent } from "./heroes/hero/hero.component";

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [HeroComponent]
  
})
export class AppComponent {
  public title: String = 'Hola Mundo';


}
