import React from 'react'
import {connect} from 'react-redux'
import { SketchPicker } from 'react-color'
import { Moodbox } from './moodbox'

export function Moodline({date}) {

    return (
    <div style={{
                    width:'300px', 
                    height:'60px', 
                    display: 'flex',
                    flexDirection: 'row',
                    margin:'20px',
                    alignContent:'center',
                    justifyContent:"center"
                }}>
        <p>{date}</p>
        <Moodbox color={"#35d3da"}/>
        <Moodbox color={"#9cb806"}/>
        <Moodbox color={"#fef764"}/>
        <Moodbox color={"#f89c12"}/>
        <Moodbox color={"#643b9f"}/>
        <Moodbox color={"#9cb806"}/>
        <Moodbox color={"#f23c06"}/>        
    </div>
    )
}