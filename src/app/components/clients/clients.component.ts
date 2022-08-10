import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/models/clients';
import {ClientsService} from '../../services/clients.service'
import { Router } from '@angular/router';
import { CreditsService } from 'src/app/services/credits.service';
import { Credits } from 'src/app/models/credits';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  
  constructor(public clientsServices: ClientsService,public creditsService:CreditsService,private router:Router) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientsServices.getClients().subscribe(
      res=>{
        this.clientsServices.clients=res;
      }
    )
    
  }

  deleteClients(id:string){
    if(confirm('Estas seguro de que quieres eliminar al cliente?')){
      this.clientsServices.deleteClients(id).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => this.getClients()
      });
    }
  }

  editClients (clients:Clients){
    this.clientsServices.clientAdded=clients;
    this.router.navigate(['/addClients'])
    
  }
  
  analysisClient(id: string, clients: Clients) {

    if (clients.person == 'Persona Fisica') {
      this.creditsService.getCredit(clients).subscribe(
        res => {
          if (res != null) {
            this.creditsService.creditsCreated = res;
            this.router.navigate(['/analysisClient']);
          } else {
            this.creditsService.creditsCreated.id_client = id;
            this.router.navigate(['/analysisClient']);
          }
        }
      )
    }else if(clients.person=='Persona Moral'){
      this.creditsService.getCredit(clients).subscribe(
        res => {
          if (res != null) {
            
            this.router.navigate(['/analysisClientMoral']);
          } else {
            
            this.router.navigate(['/analysisClientMoral']);
          }
        }
      )
    }
  }
}
