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
  public newNumber = false;

  constructor() {}

  ngOnInit() {
    this.numero = '0';
    this.numeroAux = '0';
  }

  somar() {
    this.operacao = 'somar';
    this.numeroAux = this.numero;
    this.newNumber = true;
  }

  multiplicar() {
    this.operacao = 'multiplicar';
    this.numeroAux = this.numero;
    this.newNumber = true;
  }

  dividir() {
    this.operacao = 'dividir';
    this.numeroAux = this.numero;
    this.newNumber = true;
  }

  subtrair() {
    this.operacao = 'menos';
    this.numeroAux = this.numero;
    this.newNumber = true;
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
    this.operacao = '';
    this.numeroAux = '';

    this.numero = (this.converte(this.numero) / 100)
      .toString()
      .replace('.', ',');
  }

  igual() {
    const numeroFinal = this.converte(this.numero);
    const numeroFinalAux = this.converte(this.numeroAux);

    switch (this.operacao) {
      case 'somar':
        this.numero = this.sum(numeroFinal, numeroFinalAux).toString();
        break;

      case 'subtrair':
        this.numero = this.subtract(numeroFinal, numeroFinalAux).toString();
        break;

      case 'multlipicar':
        this.numero = this.multiply(numeroFinal, numeroFinalAux).toString();

        break;

      case 'dividir':
        this.numero = this.divide(numeroFinal, numeroFinalAux).toString();

        break;
    }
    this.operacao = '';
  }

  numeros(num: string) {
    if (this.numero.startsWith('0') && !this.numero.startsWith('0,')) {
      this.numero = '';
    }

    if (this.numero.length <= 8) {
      if (this.newNumber) {
        this.numero = num;
        this.newNumber = false;
      } else {
        this.numero += num;
      }
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

  sum(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return a / b;
  }
}
