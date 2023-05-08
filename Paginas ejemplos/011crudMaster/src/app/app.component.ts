import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'crudMaster';
  employees = [
    {
      firstName: "Claudio",
      lastName: "Ortiz",
      emailId: "claudio@gmail.com"
    },
  
  ]
}
