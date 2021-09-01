import React from 'react'
import { CardContainer } from '~/styles/common/card'

const Card = ({ children, ...props }) => {
  return (
    <CardContainer elevation={2} {...props}>
      {children}
    </CardContainer>
  )
}

export default Card