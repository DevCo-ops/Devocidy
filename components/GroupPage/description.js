import Typogaphy from '@material-ui/core/Typography'

const Description = ({description}) => {
  return (
    <Typogaphy variant="p" component="p">
      {description}
    </Typogaphy>
  )
}

export default Description
