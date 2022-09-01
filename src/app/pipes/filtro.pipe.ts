import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = '', coloumna: string = 'title'): any[] {

    if (texto === '') {
      return arreglo;
    }
    // si el arreglo viene basio osea diferente de null
    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

      return arreglo.filter(
        item => item[coloumna].toLowerCase().includes(texto)
      );
  }

}
