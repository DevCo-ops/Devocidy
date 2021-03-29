import {Fragment} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {getGroupById} from '../../dummy'

const GroupPage = () => {
  const router = useRouter()
  const group = getGroupById(router.query.groupId)
  return (
    <div>
      <Image src={group.img} width={100} height={100}/>
      {/* This will be the nested route for a group page
          Still decideing if it should be nested or not
      */}
    </div>
  )
}

export default GroupPage
