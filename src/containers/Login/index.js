import React, {Component} from 'react'
import PageWrapper from '../../components/PageWrapper'
import AuthFormGenerator from '../../components/AuthForms'
import loginForm from '../../components/AuthForms/loginForm'
import { StyledGrid, OuterFuture4ProfileImg, InnerFuture4ProfileImg } from './styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import Future4Profile from '../../assets/PerfilFuture4.png'
import {login} from '../../actions/auth'


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      form: loginForm
    }
  }

  handleInputInfo = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormWithEnter = (e) => {
    if (e.key === "Enter") {
      this.login(e)
    }
  }

  login = () => {
    const {password, email} = this.state
    this.props.submitLogin(email, password)
  }

  render(){
    const { form } = this.state
    const { goToSignupPage } = this.props

    return(
      <PageWrapper>
        <StyledGrid container justify="center" alignItems="center">
          <OuterFuture4ProfileImg src={Future4Profile} alt="Future4 logo" />
          <AuthFormGenerator
            formMapper={form}
            formMapValue={form.state}
            onChangeMapFunc={this.handleInputInfo}
            onClickMainButton={this.login}
            onKeyDown={this.submitFormWithEnter}
            mainButtonLabel={"Login"}
            onClickFooterRouterLeft={() => function(){}}
            footerRouterLeftText={"Forgot your password?"}
            onClickFooterRouterRight={goToSignupPage}
            footerRouterRightText={"Signup"}
          />
        </StyledGrid>
      </PageWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToSignupPage: () => dispatch(push(routes.signup)),
  submitLogin: (name, password) => dispatch(login(name, password))
}) 


export default connect(null, mapDispatchToProps)(Login)