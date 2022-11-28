import { Component } from '@angular/core';

@Component({
  selector: 'app-patiant-entry',
  templateUrl: './patiant-entry.component.html',
  styleUrls: ['./patiant-entry.component.css']
})
export class PatiantEntryComponent {
  pNAme = ""
  pId = ""
  pAddress = ""
  contactNumber = ""
  dateOfAppointment = ""
  pImage = ""
  docName = ""

  pEntry = () => {
    let data:any = {
      "pNAme":this.pNAme,
      "pId":this.pId,
      "pAddress":this.pAddress,
      "contactNumber":this.contactNumber,
      "dateOfAppointment":this.dateOfAppointment,
      "pImage":this.pImage,
      "docName":this.docName
    }
    console.log(data)
  }
}
