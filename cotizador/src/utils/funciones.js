const Formatodinero =(valor)=>{
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }) 
  return formatterPeso.format(valor)
} 

export {Formatodinero}