import  { useState } from "react"
import Header from "./componentes/header"
import Button from "./componentes/card";
import { Formatodinero } from "./utils/funciones";


function App() {
 

 const [Cantidad, setCantidad] = useState(0); 
 
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
      </div> 
    </div>

    </>
  )
}

export default App
