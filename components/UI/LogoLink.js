import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  img: {
    cursor: 'pointer',
  }
}))

const LogoLink = () => {
  const classess = useStyles()
  return (
    <Link href="/">
        <Image className={classess.img} src='/images/IMGLINK2.jpg' height={0} width={200} />
    </Link>
  )
}

export default LogoLink
