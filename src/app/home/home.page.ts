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
    this.newNumber = true;
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
    this.operacao = 'subtrair';
    this.numeroAux = this.numero;
    this.newNumber = true;
  }

  clear() {
    this.numero = '0';
    this.numeroAux = '0';
    this.newNumber = true;
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
    const fixado = this.numero.includes(',')
      ? this.numero.split(',')[1].length + 2
      : 0;

    this.numero = (this.converte(this.numero)/100)
      .toFixed(fixado)
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

      case 'multiplicar':
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
      this.operacao = '';
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
    console.log({ a });
    console.log({ b });
    return a + b;
  }

  subtract(a: number, b: number): number {
    console.log({ a });
    console.log({ b });
    return b - a;
  }

  multiply(a: number, b: number): number {
    console.log({ a });
    console.log({ b });
    return a * b;
  }

  divide(a: number, b: number): number {
    console.log({ a });
    console.log({ b });
    return b / a;
  }
}
