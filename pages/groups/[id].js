import Group from '@/Containers/group';
import { useRouter } from 'next/router';
import { getGroupById } from '../../dummy';
import Progress from '@/components/UI/progress';

const GroupPage = () => {
  const router = useRouter();
  const group = getGroupById(router.query.id);
  console.log(group, router.query);
  if (group) {
    return <Group group={group} />;
  } else {
    return <Progress />;
  }
};

export default GroupPage;
