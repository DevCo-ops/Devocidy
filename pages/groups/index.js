import {Fragment} from 'react'
import GroupList from '../../components/Goups/group-list'
import getAllGroups from '../../dummy';

const GroupListPage = () => {
  const groups = getAllGroups()
  return (
    <Fragment>
      <h1>Groups</h1>
        <GroupList groups={groups}/>
    </Fragment>
  )
}

export default GroupListPage
