import React from 'react'
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
  return (
    <Typography>
      {'Copyright ©'}{new Date().getFullYear()}
    </Typography>
  )
}

export default Copyright
