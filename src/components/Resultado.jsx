import styled from "@emotion/styled"

const Cotizacion = styled.div`
    color: #FFF;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

export const Resultado = ({ cotizacion }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion

  return (
    <Cotizacion>
      <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="Imagen Cripto" 
      />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Cotizacion>
  )
}
