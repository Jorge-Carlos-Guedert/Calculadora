import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public numero = "0";
  public numeroAux = "0";

  constructor() {}

  ngOnInit() {
    this.numero = "0";
    this.numeroAux = "0";
  }

  somar() {
    alert('+');
  }

  multiplicar() {
    alert('X');
  }

  dividir() {
    alert('/');
  }

  subtrair() {
    alert('-');
  }

  clear() {
    this.numero = "0";
    this.numeroAux = "0";
  }

  negativo() {
    if(this.numero.includes('-')){
      this.numero = (this.numero.replace('-','') + this.numero);
    }
    else{
      this.numero = ("'-' + this.numero")
    }
  }

  percentual() {
    alert('%');
  }

  igual() {
    alert('=');
  }

  numeros(num: string) {
    if(this.numero.startsWith('0')){
      this.numero =""
    }

    if(this.numero.length <= 8){
      this.numero += num;

    }
  }

  virgula() {
    if(this.numero.length <= 8 && !this.numero.includes(',')){
      this.numero += ',';

    }
  }
}
