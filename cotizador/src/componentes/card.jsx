/* eslint-disable react/prop-types */
function Button({operador,operacion}) {
 
    return (<>
      <button type="button" 
      className="h-10 w-10  flex bg-indigo-500 rounded-full flex justify-center items-center text-white font-bold 
      text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out border-none" 
      onClick={operacion}
      >{operador}</button>
    </>  );
}

export default Button;