import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  afuConfig = {
    uploadAPI: {
      url:"https://stack.com/api/file-upload"
    }
};
}
