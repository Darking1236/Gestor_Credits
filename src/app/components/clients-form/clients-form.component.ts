import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import {ClientsService} from '../../services/clients.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-clients',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  constructor(public clientsServices: ClientsService,private router:Router) { }
  
  ngOnInit(): void {
  }

  
  addClients(form: NgForm) { 
    if (form.value._id) {
      this.editClients(form);
    } else {
      this.clientsServices.createClients(form.value).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => {
          this.router.navigate(['/'])
          form.reset();
        }
      })
    }
  }

  editClients(form:NgForm){
    this.clientsServices.editClients(form.value).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => {
        this.router.navigate(['/'])
        form.reset();
      } 
    })
  }
}
