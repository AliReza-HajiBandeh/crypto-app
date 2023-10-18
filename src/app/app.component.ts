import { Component } from '@angular/core';

@Component({
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  selector: 'app-root',
  styles: []
})
export class AppComponent {
  size = 10;
  page = 1;
}
