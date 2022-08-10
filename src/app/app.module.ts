import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule,Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsFormComponent } from './components/clients-form/clients-form.component';
import { ClientsFormAnalysisComponent } from './components/clients-form-analysis/clients-form-analysis.component';
import { ClientsFormAnalysisMoralComponent } from './components/clients-form-analysis-moral/clients-form-analysis-moral.component';
import { PopupResultComponent } from './components/clients-form-analysis/popup-result/popup-result.component';

const routes:Route[]=[
  {path:'',component:ClientsComponent},
  {path:'addClients',component:ClientsFormComponent},
  {path:'analysisClient',component:ClientsFormAnalysisComponent},
  {path:'analysisClientMoral',component:ClientsFormAnalysisMoralComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientsFormComponent,
    ClientsFormAnalysisComponent,
    ClientsFormAnalysisMoralComponent,
    PopupResultComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatButtonToggleModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
