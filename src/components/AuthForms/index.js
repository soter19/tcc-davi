import React from 'react'
import { 
  StyledFormControl, 
  StyledTextField, 
  StyledCard, 
  StyledButton, 
  ButtonIcon, 
  HeaderWrapper,
  FooterWrapper,
  StyledLink,
  InnerFuture4ProfileImg 
} from './styled'
import { CardHeader } from '@material-ui/core'
import Future4Profile from '../../assets/PerfilFuture4.png'

const AuthFormGenerator = (props) => { 

  const mainButtonComponent = props.onClickMainButton 
    ?
  <StyledButton
    variant="contained"
    color="primary"
    onClick={props.onClickMainButton}

  >
    {props.mainButtonLabel}
  </StyledButton>
    :
  null

  const secondaryButtonComponent = props.onClickSecondButton
    ?
  <StyledButton
    variant="contained"
    color="inherit"
    onClick={props.onClickSecondButton}
    endIcon={<ButtonIcon src={props.secondButtonImgSource} />}
  >
    {props.secondButtonLabel}
  </StyledButton>
    :
  null

  const footerRouterLeft = props.onClickFooterRouterLeft
    ?
  <StyledLink onClick={props.onClickFooterRouterLeft}>
    {props.footerRouterLeftText}
  </StyledLink>
    :
  null

  const footerRouterRight = props.onClickFooterRouterRight
    ?
  <StyledLink onClick={props.onClickFooterRouterRight}>
    {props.footerRouterRightText}
  </StyledLink>
    :
  null

  return(
    <StyledCard variant="outlined">
      <HeaderWrapper>
        <CardHeader
          title="Admin App" 
        />
      </HeaderWrapper>
      <StyledFormControl>
        {props.formMapper.map((item) => {
          return (
            <StyledTextField key={item.name}
              name={item.name} 
              type={item.type}
              required={item.required}
              value={props.formMapValue}
              onChange={props.onChangeMapFunc}
              variant={item.variant}
              label={item.placeholder}
              onKeyDown={props.onKeyDown}
            />
          )
        })}
        {mainButtonComponent}
        {secondaryButtonComponent}
        <FooterWrapper>
          {footerRouterLeft}
          {footerRouterRight}
        </FooterWrapper>
        <InnerFuture4ProfileImg src={Future4Profile} alt="Future4 logo"/>
      </StyledFormControl>
    </StyledCard>
  )
}


export default AuthFormGenerator