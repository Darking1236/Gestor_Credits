import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Clients} from '../models/clients';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
  URL_API='http://localhost:4000/api/clients';
 
  clientAdded:Clients={
    name: '',
    age: 0,
    status:'Pendiente',
    person: 'Persona Fisica',
    labor_Old:'(+)36 M',
    seniority_At_Home:0,
    own_House:'Si',
    land_Line:'Si' ,
    phone:"",
    voucher_Valid:'Si' ,
    marital_Status:'Soltero',
    no_of_Dependents:0,
    from: '',
    position: '' ,
    trade_Name: ''
  };

  clients?: Clients[];

  constructor(private http:HttpClient) { }

  getClients(){
    return this.http.get<Clients[]>(this.URL_API);
    
  }

  createClients(clients: Clients){
    return this.http.post(this.URL_API,clients);
  }

  deleteClients(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
  editClients(clients:Clients){
    return this.http.put(`${this.URL_API}/${clients._id}`,clients);
  }
}
