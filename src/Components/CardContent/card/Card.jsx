


import React from 'react'

const Card = (props) => {
  return (
    <div>
      {
        props.cardData.map((el, index) =>
        <div className='cardStyle'>
          <img key={index} src={el.Img} alt={el.Alt} width="200px" />
          <h3 key={index}>{el.ProductName}</h3>
          <h4 key={index}>Precio: USD {el.Price}</h4>
          <button>Agregar al carrito</button>
        </div>


        )

      }

    </div>
  )
}

export default Card