import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Header, Image } from 'semantic-ui-react';



export default function Entry(){
  
    return(                             
        < div id="fullPage" style={{
            position: 'fixed', 
            top:'0',
            right:'0',
            left:'0',
            bottom:'0',
            overflow: 'auto',  
            display: 'flex',
            flexDirection: 'row',
            backgroundImage:'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundSize:'cover'
          }}>
   
            <div style={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5em',
            marginLeft:'10%',
            marginRight:'10%'
            }}>
                 <div style={{marginTop: '5em',}}>
                        <Image src='https://www.fotor.com/blog/wp-content/uploads/2021/06/SoundCloud-profile-picture-size.png' avatar size='small'  />
                        <span style={{fontSize:'20px'}}>Username</span>
                    </div>

        <Container style={{border: '1px solid',borderRadius:20,padding:25,marginTop:50, backgroundColor:'rgba(255,255,255,0.8)' }}>
        <Header as='h2'>Name Of Entry</Header>
            <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at metus quis leo dignissim viverra. Nunc rhoncus elit ac vehicula rhoncus. Nam iaculis laoreet dui, id posuere sapien finibus eu. Nullam vel diam laoreet, lobortis orci eu, vestibulum risus. Aenean sodales ultricies lacus eget accumsan. Praesent nec nunc ullamcorper, mattis diam et, mattis nibh. Integer sodales purus eu sapien convallis auctor. Mauris fringilla congue tincidunt. Proin lacinia tincidunt metus, ac gravida arcu placerat id. Sed et bibendum ex. Quisque rhoncus cursus convallis. Nulla eget ultrices mauris, eget lacinia massa.
            </p>
            <p>
                Vivamus et nisl aliquam justo consectetur porta. Donec in libero at sapien efficitur vulputate vitae vel nisl. Pellentesque dictum tincidunt sagittis. Mauris ultrices quis erat id dignissim. Nam sagittis libero tempus turpis pretium mattis. Mauris venenatis hendrerit nisl nec tempus. Integer et odio in erat volutpat pharetra condimentum quis est. Suspendisse ut turpis convallis ex eleifend lobortis. Vivamus dapibus sem vitae erat venenatis hendrerit. Morbi imperdiet nulla quis felis consequat molestie.
            </p>
            <p>
                Sed placerat pretium turpis, non auctor libero semper eu. In iaculis in arcu sit amet volutpat. Donec pharetra facilisis vulputate. Donec porta risus a nisl fringilla pretium. Sed euismod, leo sit amet dictum vulputate, libero lacus pretium turpis, bibendum viverra justo risus in odio. Nullam nec nunc varius lacus tincidunt accumsan. Curabitur ex turpis, venenatis eu tincidunt a, lobortis vel est. Cras lobortis ligula eu est fringilla vulputate. Aenean a sagittis arcu.
            </p>
        </Container>

        <div style={{display: 'flex', justifyContent: 'space-evenly',gap:'10px'}}>
            <NavLink to="/user/create">
            <Button>Create New</Button>
            </NavLink>
            <NavLink to="/user/edit">
            <Button>Edit</Button>
            </NavLink>
            <NavLink to="/user">
            <Button>Delete</Button>
            </NavLink>
           
           
                </div>
            </div>
        </div>
    )
}