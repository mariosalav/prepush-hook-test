import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prepush-hook-angular';
  obj = {
    name: 'Mario'
  };

  myTest() {
    console.log(this.obj.name);
  }
}
