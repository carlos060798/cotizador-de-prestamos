# cotizador-de-prestamos
cotiza prestamos

# paquetes instalados para trabajar 
--npm install -D tailwindcss postcss autoprefixer 
2-para crear los archivos package para poder trabajar con tailwindcss
-- npx tailwindcss init -p 

# configuracion para manejar estilos de tailwindcss en el package config de tailwindcss
 export default {
  content: [
    "./index.html",
    "./src/**/*{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

