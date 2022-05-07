import React from 'react'
import {connect} from 'react-redux'
import { SketchPicker } from 'react-color'
import { Moodline } from './moodline'
import { Moodbox } from './moodbox'

export function DaySnippet() {

    return (
    <div style={{width:'90%', height:'90%', display:"flex", justifyContent:"center", alignContent:"center"}}>
        <div style={{width:'20%', height:'100%', display:"flex", flexDirection:'column', justifyContent:"center", alignContent:"center", marginRight:"50px"}}>
            <p>Today's Mood</p>
            <div style={{backgroundColor: '#fef764', height: '75px', width:'75px', marginLeft:'20px', marginTop:'10px', marginBottom:'10px', borderStyle:'solid', borderWidth:'thin', borderRadius:'5px', borderColor:'rgba(0, 0, 0, .2)'}}/>
            
        </div>
        <div style={{width:'80%', height:'100%', display:"flex", justifyContent:"center", alignContent:"center", flexDirection:'column'}}>
            <p >What is having the biggest effect</p>
            <div style={{backgroundColor:'rgb(255,255,255,0.5)', height: '90%', width:'90%', margin:'5px', borderStyle:'solid', borderWidth:'thin', wordWrap:'break-word', borderRadius:'5px', borderColor:'rgba(0, 0, 0, .2)'}}>
                <p style={{margin:'10px', }}> I am stressed for an upcoming meeting!</p>
            </div>
        </div>
        
            
            


        
    </div>
    )
}