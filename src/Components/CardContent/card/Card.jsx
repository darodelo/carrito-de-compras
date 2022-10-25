/* 



const Card = (props) => {
  return (
    <div>
      {
        props.cardData.map((el, index) =>
        <div className='cardStyle'>
          <img key={index} src={el.Img} alt={el.Alt} width="200px" />
          <h3 key={index}>{el.ProductName}</h3>
          <h4 key={index}>Precio: USD {el.Price}</h4>
          <button className="product__btn" onClick={() => ProductAdd(product)}>
             Agregar Al Carrio
            </button>
        </div>


        )

      }

    </div>
  )
}

export default Card */