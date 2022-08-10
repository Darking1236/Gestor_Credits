import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { CreditsService } from 'src/app/services/credits.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { PopupResultComponent } from './popup-result/popup-result.component';
import { ClientsService } from 'src/app/services/clients.service';
@Component({
  selector: 'app-clients-form-analysis',
  templateUrl: './clients-form-analysis.component.html',
  styleUrls: ['./clients-form-analysis.component.css']
})
export class ClientsFormAnalysisComponent implements OnInit {


  constructor(public creditsServices: CreditsService,public clientsServices: ClientsService ,private router: Router,public matDialog: MatDialog) { }

  ngOnInit(): void {

  }
  
  openFormResult() {

    const dialogConfig = this.matDialog.open(PopupResultComponent,{
      disableClose:true,
      width:'800px',
      height:'600px',
      panelClass:'result',
      data:{
        calificacion_bc: this.creditsServices.creditsCreated.customer_ratingscore,
        precalificacion:this.creditsServices.creditsCreated.custumer_prequalification,
        aforo_neto: this.creditsServices.creditsCreated.net_capacityscore,
        capacidad_de_pago: this.creditsServices.creditsCreated.payment_capacity,
        capacidad_de_pagoScore:this.creditsServices.creditsCreated.payment_capacityscore,
        antiguedad_laboralScore:this.creditsServices.creditsCreated.labor_oldscore,
        suma_puntos:this.creditsServices.creditsCreated.sumof_points,
        enganche:this.creditsServices.creditsCreated.hitch
      },
      backdropClass: 'userActivationDialog'
    });
    
    dialogConfig.afterClosed().subscribe(result=>{
      console.log('close');
    });
  }

  calcularPrecio(){
    var enganche=this.creditsServices.creditsCreated.hitch.toString();
    var valorFactura=this.creditsServices.creditsCreated.invoice_value.toString();
    this.creditsServices.creditsCreated.price=(parseFloat(enganche)/100)*parseFloat(valorFactura);
    this.creditsServices.creditsCreated.financing=parseFloat(valorFactura)-this.creditsServices.creditsCreated.price;
  }

  calcularAforo(){
    this.creditsServices.creditsCreated.capacity=Math.abs(parseFloat(this.creditsServices.creditsCreated.add_income.toString())-parseFloat(this.creditsServices.creditsCreated.sum_ofExpenses.toString()));
  
  }

  evaluarScore(score: number) {
    if (score == undefined || score == NaN || score.toString() == "" || score < 0) {
      this.creditsServices.creditsCreated.score_Bc = 0;
    } else if (score >= 715) {
      this.creditsServices.creditsCreated.custumer_prequalification = 'A';
    } else if (score >= 680 && score <= 714) {
      this.creditsServices.creditsCreated.custumer_prequalification = 'B';
    } else if (score >= 650 && score <= 679) {
      this.creditsServices.creditsCreated.custumer_prequalification = 'C';
    } else if (score >= 600 && score <= 649) {
      this.creditsServices.creditsCreated.custumer_prequalification = 'D';
    } else {
      this.creditsServices.creditsCreated.custumer_prequalification = 'D';
    }
  }

  sumaEgresos(valorActual: number) {
    var valorInicial = valorActual;

    if (valorInicial == undefined || valorInicial == NaN || valorInicial.toString() == "" || valorInicial < 0) {
      this.creditsServices.creditsCreated.sum_ofExpenses = 0;

    } else {
      var rentaCasa = this.creditsServices.creditsCreated.house_rent.toString();
      var alimentacion = this.creditsServices.creditsCreated.feeding.toString();
      var gasolina = this.creditsServices.creditsCreated.gasoline.toString();
      var servicios = this.creditsServices.creditsCreated.services.toString();
      var Otros = this.creditsServices.creditsCreated.Other.toString();

      this.creditsServices.creditsCreated.sum_ofExpenses = parseFloat(rentaCasa) + parseFloat(alimentacion) + parseFloat(gasolina) + parseFloat(servicios) + parseFloat(Otros);
      this.calcularAforo();
    }

  }

  sumaIngresos(valorActual: number) {

    var valorInicial = valorActual; 

    if (valorInicial == undefined || valorInicial == NaN || valorInicial.toString() == "" || valorInicial < 0) {
      this.creditsServices.creditsCreated.add_income = 0;

    } else {
      var ingresoMensual = this.creditsServices.creditsCreated.monthly_netIncome.toString();
      var actividadAdicional = this.creditsServices.creditsCreated.additional_activity.toString();
      var bonos = this.creditsServices.creditsCreated.bonds.toString();
      var otros = this.creditsServices.creditsCreated.other.toString();
      var ingresosConyuge = this.creditsServices.creditsCreated.spouse_income.toString();
      var ingresosAval = this.creditsServices.creditsCreated.endorsement_income.toString();
      this.creditsServices.creditsCreated.add_income = parseFloat(ingresoMensual) + parseFloat(actividadAdicional) + parseFloat(bonos) + parseFloat(otros) + parseFloat(ingresosConyuge) + parseFloat(ingresosAval);
      this.calcularAforo();
    }


  }

  addCredits(form: NgForm) {
    if (form.value._id) {
      this.editCredits(form);
    } else {
      this.creditsServices.createCredits(form.value).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => {
          this.router.navigate(['/'])
          form.reset();
        }
      })
    }
  }

  editCredits(form: NgForm) {
    this.creditsServices.editCredits(form.value).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => {
        this.router.navigate(['/'])
        form.reset();
      }
    })
  }
}
