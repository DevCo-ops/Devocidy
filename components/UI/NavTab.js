import React from 'react'
import { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Tab from '@material-ui/core/Tab'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.primary
  }
}))

const NavTab = (props) => {
  const classes = useStyles()
  const {name, location} = props
  return (
    <Fragment>
        <Link href={location}>
          <Tab variant="outlined" label={name} className={classes.button} />
        </Link>
    </Fragment>
  )
}

export default NavTab
