import React, { Component } from 'react'
import {  
  LayoutWrapper, 
  MainDashboardSection, 
} from './styled'
import Header from '../../components/Header'
import SideAppBar from '../../components/SideAppBar'
import UserActions from '../../components/UserActions'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'


class Actions extends Component {
  render() {
    const {goToDashboardPage} = this.props 
    return (
      <LayoutWrapper>
        <SideAppBar
          pageSelected={1}
          onClick={goToDashboardPage} 
        />
        <MainDashboardSection>
          <Header />
          <UserActions />
        </MainDashboardSection>
      </LayoutWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToDashboardPage: () => dispatch(push(routes.dashboard)),
}) 

export default connect(null, mapDispatchToProps)(Actions)
