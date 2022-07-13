export function getCotizacion(puntoA, puntoB) {
 let valor = 2000; //estandar
  if (puntoA.continente==puntoB.continente) {
    valor = valor * 0.9;
  }
  if (puntoA.pais==puntoB.pais) {
    valor = valor * 0.8;
  }
  if (puntoA.ciudad==puntoB.ciudad) {
    valor = valor * 0.5;
  }
   return valor;
}
