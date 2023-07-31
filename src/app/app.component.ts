import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'taskbox';

  doSomething() {
    console.log("I am doing something!")
  }
}
