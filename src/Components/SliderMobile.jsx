import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "../Styles/Slider.css";

function SliderMobile(props)
{
    var items = [
        {
            src: "./slider1-375.jpg",
            alt: "Slider image",
                    },
        {
            src: "./slider2-375.jpg",
            alt: "Slider image",
        },
        {
            src: "./slider3-375.jpg",
            alt: "Slider image",
        },
        {
            src: "./slider4-375.jpg",
            alt: "Slider image",
        },
        {
            src: "./slider5-375.jpg",
            alt: "Slider image",
        },
        {
            src: "./slider6-375.jpg",
            alt: "Slider image",
        },
        {
            src: "./slider7-375.jpg",
            alt: "Slider image",
        },
        {
            src: "./slider8-375.jpg",
            alt: "Slider image",
        },
        {
            src: "./slider9-375.jpg",
            alt: "Slider image",
        },
        {
            src: "./slider10-375.jpg",
            alt: "Slider image",
        }
        
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <div className='image-slider'>
                <h2>EL MUNDO FUNKO EN UN SOLO LUGAR</h2>
                <img src={props.item.src} alt={props.item.alt} />
                <br/>
                <Button className="CheckButton">
                <h3>Seguinos en Instagram</h3>
                </Button>
            </div>
        </Paper>
    )
}

export default SliderMobile