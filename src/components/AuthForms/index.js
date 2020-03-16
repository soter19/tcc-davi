import React from 'react'
import { 
  StyledFormControl, 
  StyledTextField, 
  StyledCard, 
  StyledButton, 
  ButtonIcon, 
  HeaderWrapper,
  FooterWrapper,
  StyledLink 
} from './styled'
import { CardHeader } from '@material-ui/core'


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
      </StyledFormControl>
    </StyledCard>
  )
}


export default AuthFormGenerator