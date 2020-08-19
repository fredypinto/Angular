import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  rta: number;

  public suma(val1:number, val2:number) {
    this.rta = Number(val1) + Number(val2);
    return this.rta;
  }
  public resta(val1:number, val2:number) {
    this.rta = Number(val1) - Number(val2);
    return this.rta;
  }
  public multiplicacion(val1:number, val2:number) {
    this.rta = Number(val1) * Number(val2);
    return this.rta;
  }
}
