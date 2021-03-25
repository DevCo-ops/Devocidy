import React from 'react'
import { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const LinkButton = (props) => {
  const {name, location} = props
  return (
    <Fragment>
      <Link href={location}>
        <Button>{name}</Button>
      </Link>
    </Fragment>
  )
}

export default LinkButton
