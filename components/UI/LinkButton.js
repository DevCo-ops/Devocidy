import React from 'react'
import { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.primary.light
  }
}))

const LinkButton = (props) => {
  const classes = useStyles()
  console.log(classes)
  const {name, location} = props
  return (
    <Fragment>
      <Link href={location}>
        <Button variant="outlined" className={classes.button}>{name}</Button>
      </Link>
    </Fragment>
  )
}

export default LinkButton
