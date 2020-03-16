import React, { Component } from 'react'
import {  
  LayoutWrapper, 
  MainDashboardSection, 
} from './styled'
import Header from '../../components/Header'
import Charts from '../../components/Charts'
import SideAppBar from '../../components/SideAppBar'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'


class Dashboard extends Component {

  render() {
    const {goToActionsPage} = this.props 
    return (
      <LayoutWrapper>
        <SideAppBar
          pageSelected={0}
          onClick={goToActionsPage} 
        />
        <MainDashboardSection>
          <Header />
          <Charts />
        </MainDashboardSection>
      </LayoutWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToActionsPage: () => dispatch(push(routes.actions)),
}) 

export default connect(null, mapDispatchToProps)(Dashboard)