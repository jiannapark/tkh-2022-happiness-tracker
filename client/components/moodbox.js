import React from 'react'
import {connect} from 'react-redux'
import { SketchPicker } from 'react-color'

export function Moodbox({color}) {

    const handleClick = () => {
        console.log("Hello")
    }

    return (
    <div 
        style={{backgroundColor: color, height: '20px', width:'20px', borderRadius:'5px', margin:'5px', borderStyle:'solid', borderWidth:'thin', borderColor:'rgba(0, 0, 0, .2)'}}
        onClick = {handleClick}
    
    
    />

        
    
    )
}