import React from 'react'
import { Page } from './styled'


const PageWrapper = (props) => {
 

  return(
    <Page disableGutters maxWidth='false'>
      {props.children}
    </Page>
  )
}

export default PageWrapper
