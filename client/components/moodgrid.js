import React from 'react'
import {connect} from 'react-redux'
import { SketchPicker } from 'react-color'
import { Moodline } from './moodline'

export function Moodgrid() {

    return (
    <div style={{width:'90%', height:'90%',display:'flex', alignItems:'center', borderColor:'rgba(0, 0, 0, .2)',
                justifyContent:'top', flexDirection:'column', borderStyle:'solid', borderWidth:'thin', borderRadius:'5px',
                backgroundColor:'rgb(255,255,255,0.5)'}}>
            <p style={{display:'flex', alignContent:'center', justifyContent:'center', flexDirection:'row', width:'100%', margin:'30px'}}>Mood Grid</p>
            <div style={{display:'flex', alignContent:'center', justifyContent:'center', flexDirection:'row'}}>
                <div>
                    <Moodline date='3/27'/>
                    <Moodline date='4/03'/>
                    <Moodline date='4/10'/>
                    <Moodline date='4/17'/>
                    <Moodline date='4/24'/>
                    </div>
                <div>
                    <Moodline date='3/27'/>
                    <Moodline date='4/03'/>
                    <Moodline date='4/10'/>
                    <Moodline date='4/17'/>
                    <Moodline date='4/24'/>
                    </div>
                </div>
            
            
    </div>
    )
}