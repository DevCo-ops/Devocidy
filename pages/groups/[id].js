import Group from '../../Containers/group'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {getGroupById} from '../../dummy'

const GroupPage = () => {
  const router = useRouter()
  const id = router.query.id
  
  return (
    <div>
      <Group id={id}/>
    </div>
  )
}

export default GroupPage
