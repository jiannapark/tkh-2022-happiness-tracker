import React from "react"
import { connect } from "react-redux"
import { auth } from "../store/user"
import {
    Container,
    Button,
    Divider,
    Form,
    Grid,
    Segment,
    Responsive,
} from "semantic-ui-react"

export class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            method: "login",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeMethod = this.handleChangeMethod.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.persist()
        this.setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    handleChangeMethod(e) {
        e.persist()
        this.setState(prevState => ({
            ...prevState,
            method: prevState.method === "login" ? "signup" : "login",
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        const { method, email, password, firstName, lastName } = this.state
        const userInfo = {
            email,
            password,
            firstName,
            lastName,
        }
        this.props.auth(method, userInfo)
    }

    render() {
        const isLogin = this.state.method === "login"

        return (
            <Container style={{width: '65%'}}>
                <Segment style={{marginTop: '15%'}}>
                    <Grid
                        columns={2}
                        relaxed="very"
                        stackable
                        textAlign="center"
                        verticalAlign="middle"
                    >
                        <Grid.Column>
                            <Form
                                name={isLogin ? "login" : "signup"}
                                onSubmit={this.handleSubmit}
                                style={{display: 'flex', flexDirection: 'column', padding: '1em'}}
                            >
                                {isLogin ?
                                    "" :
                                    <Form.Input 
                                        name="firstName" placeholder="First name" 
                                        onChange={this.handleChange}
                                    />
                                }
                                {isLogin ?
                                    "" :
                                    <Form.Input 
                                        name="lastName" placeholder="Last name" 
                                        onChange={this.handleChange}
                                    />
                                }
                                <Form.Input
                                    icon="user"
                                    iconPosition="left"
                                    name="email"
                                    placeholder="Email address"
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    icon="lock"
                                    iconPosition="left"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                />
                                <Button
                                    color="green"
                                    type="submit"
                                    content={isLogin ? "Sign In" : "Sign Up"}
                                />
                            </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                content="Forgot Password"
                                // onClick={this.findMyPassword} // TODO
                                icon="question"
                                style={{ marginBottom: "10px" }}
                            />
                            {isLogin ?
                            (<Button
                                content="Sign Up"
                                onClick={this.handleChangeMethod}
                                icon="signup"
                            />) :
                            (<Button
                                content="Sign In"
                                onClick={this.handleChangeMethod}
                                icon="sign-in"
                            />)}
                        </Grid.Column>
                    </Grid>
                    <Responsive minWidth={768}>
                        <Divider vertical>Or</Divider>
                    </Responsive>
                </Segment>
            </Container>
        )
    }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {
      auth: (method, userInfo) => dispatch(auth(method, userInfo))
  }
}

export default connect(mapState, mapDispatch)(Auth)
