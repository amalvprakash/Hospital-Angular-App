import { Component } from '@angular/core';

@Component({
  selector: 'app-patiant-delete',
  templateUrl: './patiant-delete.component.html',
  styleUrls: ['./patiant-delete.component.css']
})
export class PatiantDeleteComponent {
  delete = ""

  Delete = () => {
    let data:any = {
      "delete":this.delete
    }
    console.log(data)
  }
}
