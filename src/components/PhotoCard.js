// import React, { Component } from "react" ;
import React, { useState } from 'react'
import { Image } from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {useSpring, animated} from 'react-spring'


function PhotoCard (props) {
    console.log(props)
    const imgUrl = "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"
    // let image = props.challenge_photo || ''
    const styleProps = useSpring({
        opacity: 1, 
        config: {duration: 20000},
        reset: true,
        from: {opacity: 0}})    
    return (
        <div>
        <animated.img style={styleProps} src={props.challenge_photo} width={900} height={500} />
        </div>
    )
  
}

export default PhotoCard;