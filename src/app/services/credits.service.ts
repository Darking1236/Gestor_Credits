import { Injectable } from '@angular/core';
import {Credits} from '../models/credits';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../models/clients';
@Injectable({
  providedIn: 'root'
})
export class CreditsService {
  URL_API='http://localhost:4000/api/client/Credit';
  creditsCreated: Credits={
    custumer_prequalification:'',
    score_Bc:0,
    No_openAccounts:0,
    total_monthlyDebts:0,
    monthly_payments:0,
    monthly_netIncome:0,
    additional_activity:0,
    bonds:0,
    other:0,
    spouse_income:0,
    endorsement_income:0,
    add_income:0,
    house_rent:0,
    feeding:0,
    gasoline:0,
    services:0,
    Other:0,
    sum_ofExpenses:0,
    capacity:0,
    brand:'',
    hitch:0,
    price:0,
    financing:0,
    mounthly_payment:0,
    model:'',
    invoice_value:0,
    total_financingAmount:0,
    termM:'',
    annuity:0,
    customer_ratingscore:0,
    net_capacityscore:0,
    payment_capacityscore:0,
    payment_capacity:0,
    labor_oldscore:0,
    sumof_points:0,
    id_client:''
  }
  credits?: Credits[];
  constructor(private http:HttpClient) { }

  createCredits(credits: Credits){
    
    return this.http.post(this.URL_API,credits);
  }

  editCredits(credits:Credits){
    console.log(credits.id_client);
    return this.http.put(`${this.URL_API}/${credits.id_client}`,credits);

  }
  
  getCredit(client:Clients){
    return this.http.get<Credits>(`${this.URL_API}/${client._id}`)
  }
  
}

