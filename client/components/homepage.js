import React from 'react'
import {connect} from 'react-redux'
import { Moodgrid } from './moodgrid'
import { DaySnippet } from './daysnippet'
import { Button } from 'semantic-ui-react'

export function HomePage() {

    return (

    
      
    <div id="fullPage" style={{
                  position: 'fixed', 
                  top:'0',
                  right:'0',
                  left:'0',
                  bottom:'0',
                  overflow: 'auto',  
                  display: 'flex',
                  flexDirection: 'row',
                  fontFamily:'Amatic SC',
                  fontSize:'30px',
                  backgroundImage:'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                  backgroundSize:'cover'


                }}>
                  <style> @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap'); </style>

        <div id="left" style={{width:'50%'}}>
                <div id="leftTop" style={{height:'20%', width:'100%',fontFamily:'Amatic SC'}}>
                  </div>
                <div id="leftMiddle" style={{height:'40%', width:'100%',display:'flex', alignContent:'center', justifyContent:'center', marginBottom:'50px'}}> 
                  <div id='picture' style={{border:'solid', height:'300px', width:'300px', borderRadius:'300px', borderColor:'rgba(0, 0, 0, .2)', overflow:'hidden' }}>
                      <img height='450px' src={'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                  </div>
                  </div>
                <div id="leftBottom" style={{height:'40%', width:'100%', display:"flex", flexDirection:'column', alignItems:'center'}}> 
                        <Button secondary style={{margin:'10px', width:'30%', opacity:'0.8'}}> Enter Today's Journal Entry</Button>
                        <Button secondary style={{margin:'10px', width:'30%', opacity:'0.8'}}> Take Daily Mood Quiz</Button>
                        <Button secondary style={{margin:'10px', width:'30%', opacity:'0.8'}}> Share</Button>
                  </div>
            </div>
        <div id="right" style={{width:'50%', marginRight:'80px'}}>
                <div id="rightTop" style={{height:'10%', width:'100%'}}>
                  </div>
                <div id="rightMiddle" style={{height:'20%', width:'100%',display:'flex', alignContent:'center', justifyContent:'center'}}> 
                  <DaySnippet/>
                  </div>
                <div id="rightBottom" style={{height:'70%', width:'100%',display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
                  <Moodgrid/>
                  </div>
    
        </div>
        
    </div>
    )
  }


/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // user: state.user,
  }
}

const mapDispatch = dispatch => {
  return {
    // fetchEntries: () => dispatch(fetchEntries()),
  }
}

export default connect(mapState, mapDispatch)(HomePage)