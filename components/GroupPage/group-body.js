import ContainerBox from '@/UI/ContainerBox'
import GroupNestedRoutes from './group-nested-routes'


const GroupBody = (props) => {
  const {children, id} = props
  return (
    <ContainerBox>
      <GroupNestedRoutes id={id} />
      {children}
    </ContainerBox>
  )
}

export default GroupBody
