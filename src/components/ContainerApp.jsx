import React, { useState, useRef, useEffect } from 'react';
import Tarjeta from './Tarjeta';
import DataLenguajes from '../assets/data-lenguajes.json';


export default function ContainerApp() {

  const [colorFondo, setColorFondo] = useState("#242424");
  const [imagenFondo, setImagenFondo] = useState("url(../icon.png)");
  const fondo = useRef();

  useEffect(() => {
    fondo.current.style.backgroundColor = colorFondo;
    fondo.current.style.backgroundImage = imagenFondo;
  }, [colorFondo, imagenFondo])


  const setFondo = (props) => {
    setColorFondo(`${props.color}50`);
    setImagenFondo(`url(${props.url})`)
  }

  const setOriginalFondo = (e) => {
    if(e.target.matches(".container-app")){
      setColorFondo("#242424");
      setImagenFondo("url(../icon.png)");
    }
  }


  return (
    <div ref={fondo} className='container-app' onClick={(e) => setOriginalFondo(e)}>
      {DataLenguajes.map((el) =>
        <Tarjeta
          key={el.name}
          name={el.name}
          url={el.url}
          color={el.color}
          setFondo={setFondo} />)}
    </div>
  )
}