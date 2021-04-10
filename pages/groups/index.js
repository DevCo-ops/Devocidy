import { Fragment } from 'react';
import GroupList from '@/Containers/group-list';
import getAllGroups from '../../dummy';
// import { initializeStore } from '@/store/index';
// import { getGroups } from '@/store/groups/actions';

// const GroupListPage = ({ groups }) => {
const GroupListPage = () => {
  const groups = getAllGroups();
  return (
    <Fragment>
      <h1>Groups</h1>
      <GroupList groups={groups} />
    </Fragment>
  );
};
// export async function getServerSideProps() {
//   const reduxStore = initializeStore();
//   const { dispatch } = reduxStore;

//   await dispatch(getGroups());
//   let data = await reduxStore.getState().groups;
//   return { props: { groups: data.groups } };
// }

export default GroupListPage;
