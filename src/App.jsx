import { useState, useEffect } from "react"
import { Formulario } from "./components/Formulario"
import { Resultado } from "./components/Resultado"
import { Spinner } from "./components/Spinner"
import styled from "@emotion/styled"
import ImagenCrypto from "./img/imagen-criptos.png"



const Contenedor = styled.div `
	max-width: 900xp;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 992px){
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`

const Heading = styled.h1`
  	font-family: "Lato", sans-serif;
  	color: #fff;
	text-align: center;
	font-weight: 700;
	margin-top: 80px;
	font-size: 34px;

	&::after{
		content:"";
		width: 100px;
		height: 6px;
		background-color: #66A2FE;
		display: block;
		margin: 10px auto 0 auto;
	}
`

const Imagen = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 100px auto 0 auto;
	display: block;
`

function App() {

	const [monedas, setMonedas] = useState({})
	const [cotizacion, setCotizacion] = useState({})
	const [cargando, setCargando] = useState(false)

	useEffect(() => {
		//Si no se eligio ninugna moneda, evitamos renderizar el estado la primera vez
		if(Object.keys(monedas).length > 0){
			const { moneda, criptomoneda } = monedas
			const cotizarCrypto = async () =>{
				setCargando(true)
				setCotizacion({})
				
				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
				const respuesta = await fetch(url)
				const resultado = await respuesta.json()
				
				//Se accede de forma dinamica a las propiedades del objeto
				setCotizacion(resultado.DISPLAY[criptomoneda][moneda])
				setCargando(false)
			}
			
			cotizarCrypto()
		}
	}, [monedas])

	return (
		<Contenedor>
			<Imagen 
				src={ImagenCrypto}
				alt="imagenes criptomonedas"
			/>
			<div>
				<Heading>Cotiza criptomonedas al instante</Heading>
				<Formulario 
					setMonedas={setMonedas}
				/>
				{cargando && <Spinner />}
				{cotizacion.PRICE && <Resultado 
					cotizacion={cotizacion}
				/>}
			</div>
		</Contenedor>
	)
}

export default App
