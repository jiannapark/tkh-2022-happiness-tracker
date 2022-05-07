import React, { useState } from 'react'
import { HuePicker } from 'react-color'
import { SliderPicker } from 'react-color'
import { Form, Image, Button, TextArea, Grid, Container,} from 'semantic-ui-react'


export default function CreateEntry(){

    const [color,setColor] = useState('ff0000')

    return(
        <div >
            <h1> hello</h1>
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
       <Form.Field control={Button} style={{marginTop:10,backgroundColor:color}}>Save</Form.Field>
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