import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
//import { userInfo } from 'os';


const appRoutes:Routes=[
  {path:'charts',component:ChartDemoComponent}];

@NgModule({
  declarations: [
    AppComponent,
    ChartDemoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxEchartsModule.forRoot({
      echarts
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
