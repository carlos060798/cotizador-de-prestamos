import  { useState,useEffect } from "react"
import Header from "./componentes/header"
import Button from "./componentes/card";
import { Formatodinero,CalcularValorApagar } from "./utils/funciones";


function App() {
 

 const [Cantidad, setCantidad] = useState(0); 
 const [meses, setMeses] = useState(6);
 const[total, setTotal] = useState(0);
 const [pago,setPago] = useState(0)

 useEffect(() => {
  const resultado=CalcularValorApagar(Cantidad,meses)
  setTotal(resultado) 
  const cotamensual=total/meses
 setPago(cotamensual)
 

 }, [Cantidad,meses,pago])

 const Min=0
 const Max=1000000
 const Step=10000

 function cantidadPrestamo(e) {
   setCantidad(e.target.value);
 }
 function decrementorPrestamo() {
  let decremento = Cantidad-Step
  if(decremento < Min){
   alert ("El valor no puede ser menor a 50000")
   return
  }
  setCantidad(decremento);
 }
 function aumentoPrestamo() {
  let aumento = Cantidad+Step
  if(aumento > Max){
    alert ("El valor no puede ser menor a 1000000")
    return
   }
  setCantidad(aumento);
 } 
 
  return (
    <>
    <div className="bg-gray-50">
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">

      <Header/> 
    <div className="flex justify-between ">
    <Button operador="-" operacion={decrementorPrestamo}/>
       <Button operador="+" operacion={aumentoPrestamo}/>
    </div>
      <input type="range" className="w-full h-6 " onChange={cantidadPrestamo} min={Min}max={Max} step={Step}/>
      <p className="text-5xl font-extrabold text-indigo-500  text-center">{Formatodinero(Cantidad)}</p>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center"> Plazo de pago</h2>
      <select className="w-full h-10 border border-gray-300 rounded-md text-gray-500 text-center" value={meses} onChange={e=>setMeses(+e.target.value)}>
        <option value="6">6 meses</option>
        <option value="12">12 meses</option> 
        <option value="24">24 meses</option>
      </select> 
      <div className='my-5 space-y-3 bg-gray-50 p-5'>
            <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
                Resumen <span className='text-indigo-600'>de pagos </span>
            </h2>

            <p className='text-xl text-gray-500 text-center font-bold'>{meses} Meses</p>
            <p className='text-xl text-gray-500 text-center font-bold'> {Formatodinero(total)} Total a pagar</p>
            <p className='text-xl text-gray-500 text-center font-bold'> {Formatodinero(pago)} cota Mensual</p>
          </div>
      </div> 
    </div>

    </>
  )
}

export default App
