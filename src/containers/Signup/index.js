import React, {Component} from 'react'
import PageWrapper from '../../components/PageWrapper'
import AuthFormGenerator from '../../components/AuthForms'
import signupForm from '../../components/AuthForms/signupForm'
import { StyledGrid, OuterFuture4ProfileImg } from './styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { signup } from '../../actions/auth'
import Future4Profile from '../../assets/PerfilFuture4.png'



class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      form: signupForm
    }
  }

  handleInputInfo = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormWithEnter = (e) => {
    if (e.key === "Enter") {
      this.signup()
    }
  }

  signup = () => {
    const {name, password, email} = this.state
    this.props.submitSignup(name, email, password)
  }

  render(){
    const { form } = this.state
    const { goBack } = this.props
    
    return(
      <PageWrapper>
        <StyledGrid container justify="center" alignItems="center">
          <OuterFuture4ProfileImg src={Future4Profile} alt="Future4 logo" />
          <AuthFormGenerator
            formMapper={form}
            formMapValue={form.state}
            onChangeMapFunc={this.handleInputInfo}
            onClickMainButton={this.signup}
            onKeyDown={this.submitFormWithEnter}
            mainButtonLabel={"Signup"}
            onClickFooterRouterLeft={goBack}
            footerRouterLeftText={"Back to login page"}
          />
        </StyledGrid>
      </PageWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(push(routes.root)),
  submitSignup: (name, email, password) => dispatch(signup(name, email, password))
})

export default connect(null, mapDispatchToProps)(Signup);