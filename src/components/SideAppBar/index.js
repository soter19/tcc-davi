import React from 'react'
import { 
  Wrapper,  
  StyledList, 
  Menu, 
  StyledImg, 
  UserInfoSection, 
} from './styled'
import { 
  Typography, 
  ListItemIcon, 
  ListItemText, 
  ListItem, 
  IconButton 
} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'
import EduzzLogo from '../../assets/logo-white.png'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'



export default function SideAppBar(props){

  const [selectedIndex, setSelectedIndex] = React.useState(props.pageSelected)

  // TODO: IMPLEMENT THIS LOGIC WITH REDUX
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)

    props.onClick()
  }
 
  return(
    <Wrapper>
      <Menu>
        <StyledImg src={EduzzLogo} alt="Logo" />
        <UserInfoSection>
          <Typography >
            Hello, user
          </Typography>
          <IconButton color="primary">
            <MoreHorizIcon />
          </IconButton>
        </UserInfoSection>
      </Menu>
      <StyledList >
        <ListItem
         button
         selected={selectedIndex === 0}
         onClick={event => handleListItemClick(event, 0)} 
        >
          <ListItemIcon >
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
         button 
         selected={selectedIndex === 1}
         onClick={event => handleListItemClick(event, 1)} 
        >
          <ListItemIcon >
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText primary="Actions" />
        </ListItem>
      </StyledList> 
    </Wrapper>
  )
}