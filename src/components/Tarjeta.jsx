import React, { useRef } from 'react';

export default function Tarjeta(props) {

  const tarjeta = useRef();
  const font = useRef();

  const hoverIn = (e) => {
    tarjeta.current.classList.add("tarjetaHover");
    tarjeta.current.style.boxShadow = `0px 0px 50px ${props.color}`;
    font.current.style.color = props.color;
  }

  const hoverOut = (e) => {
    tarjeta.current.classList.remove("tarjetaHover");
    tarjeta.current.style.boxShadow = "0px 0px 10px rgb(77, 77, 77)";
    font.current.style.color = "rgb(185, 185, 185)";
  }

  return (
    <div
      ref={tarjeta}
      className='tarjeta'
      onMouseOver={hoverIn}
      onMouseOut={hoverOut}
      onClick={() => props.setFondo({ color: props.color, url: props.url })}>
      <img src={props.url} alt={props.name} />
      <p ref={font}>{props.name}</p>
    </div>
  )
}