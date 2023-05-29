const Formatodinero = (valor) => {
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
  return formatterPeso.format(valor);
};

function CalcularValorApagar(Cantidad, plazo) {
  let total;

  //validacion de interes aplicado segun candidad
  if (Cantidad < 100000) {
    total = Cantidad * 1.5;
  } else if (Cantidad >= 250000 && Cantidad < 500000) {
    total = Cantidad * 1.4;
  } else if (Cantidad >= 500000 && Cantidad < 800000) {
    total = Cantidad * 1.3;
  } else {
    total = Cantidad * 1.1;
  }

  // validacion del interes segun sea el plazo
  if (plazo === 6) {
    total *= 1.2;
  } else if (plazo === 12) {
    total *= 1.6;
  } else {
    total *= 2;
  }

  return total;
}
export { Formatodinero, CalcularValorApagar };
