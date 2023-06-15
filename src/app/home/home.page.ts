import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public numero = '0';
  public numeroAux = '0';
  public operacao = '';

  constructor() {}

  ngOnInit() {
    this.numero = '0';
    this.numeroAux = '0';
  }

  somar() {
    this.operacao = 'mais';
    this.numeroAux = this.numero;
  }

  multiplicar() {
    this.operacao = 'multiplicar';
    this.numeroAux = this.numero;
  }

  dividir() {
    this.operacao = 'dividir';
    this.numeroAux = this.numero;
  }

  subtrair() {
    this.operacao = 'menos';
    this.numeroAux = this.numero;
  }

  clear() {
    this.numero = '0';
    this.numeroAux = '0';
  }

  negativo() {
    if (this.numero != '0') {
      this.numero = this.numero.includes('-')
        ? this.numero.replace('-', '')
        : '-' + this.numero;
    }
  }

  percentual() {
    this.operacao = ''
    this.numeroAux = ''

    this.numero = (this.converte(this.numero)/ 100).toString().replace('.', ',');
  }

  igual() {
    const numeroFinal = this.converte(this.numero);
    const numeroFinalAux = this.converte(this.numeroAux);
    
    switch (this.operacao){
      case 'somar' :
        this.numero = this.numero + this.numeroAux ;
        break;

      case 'subtrair' :
          
        break;  

      case 'multlipicar' :
          
        break; 

      case 'dividir' :
          
        break;  
    }
  }

  numeros(num: string) {
    if (this.numero.startsWith('0') && this.numero.startsWith('0,')) {
      this.numero = '';
    }

    if (this.numero.length <= 8) {
      this.numero += num;
    }
  }

  virgula() {
    if (this.numero.length <= 8 && !this.numero.includes(',')) {
      this.numero += ',';
    }
  }

  converte(dados: string): number {
    if (dados.includes(',')) {
      return parseFloat(dados.replace(',', '.'));
    } else {
      return parseInt(dados);
    }
  }
}
