import React, { useState } from 'react'
import { HuePicker } from 'react-color'
import { NavLink } from 'react-router-dom'
import { Form, Image, Button, TextArea, Grid, Container,} from 'semantic-ui-react'

export default function EditEntry(){
    const [color,setColor] = useState('ff0000')

    return(
        <div style={{
            position: 'fixed', 
            top:'0',
            right:'0',
            left:'0',
            bottom:'0',
            overflow: 'auto',  
            flexDirection: 'row',
            backgroundImage:'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundSize:'cover'
          }}>
            <div style={{display:'flex',justifyContent: 'center',marginTop:'5em'}}>
            <h1 > Edit Entry </h1>
            </div>
            <Container>
      <Grid collumns={3} style={{
              gap: '50px'
      }}>
            <div>
    <Image src='https://www.fotor.com/blog/wp-content/uploads/2021/06/SoundCloud-profile-picture-size.png' avatar size='small'  />
    <span style={{fontSize:'20px'}}>Username</span>
  </div>
       
        <Grid.Row style={{justifyContent: 'space-around'}}>
        <form>
        <Grid.Column>
            <label style={{fontSize: '15px',display: 'flex',justifyContent: 'center',fontSize:'30',marginBottom: '10px'}}> How Are You Feeling </label>
       <Form.Field   
         control={TextArea}
        //  label='How Are You Feeling'
         placeholder='Express your self ...'
         style={{minHeight:"300px",width:'700px',
         display:'flex',
         flexDirection:'column',
         alignItems: 'center',
         fontSize: '20px',
         
         }}
       />
       <NavLink to="/user/entry">
       <Form.Field control={Button} style={{marginTop:10,backgroundColor:color}}>Save</Form.Field>
       </NavLink>
       </Grid.Column>
        </form>

            <Grid.Column width={4} style={{    
            display: 'flex',
            marginTop:' 20px',
            flexDirection: 'row-reverse',
            gap: '5px'
            }}>
        <div style={{justifyContent: 'center',alignItems: 'center'}}>
            <label style={{display: 'flex',justifyContent: 'center',fontSize:'30',marginBottom: '10px'}}>Select your mood color </label>
        
            <div>
            <HuePicker 
            color={color}
            onChangeComplete={ (color) => setColor(color.hex) }/>
            </div>
            <div style={{
                backgroundColor: color,
                height:200,
                width:200,
                transition: 'ease all 800ms',
                borderRadius:'100%',
                marginLeft: '4.5em',
                marginTop: '30px'
            }}>

            </div>

        </div>
        </Grid.Column>
        </Grid.Row>

        </Grid>
        </Container>  
         </div>


    )
}
