import React from 'react';
import { useRouter } from 'next/router';

const Content = () => {
  const router = useRouter();
  switch (router.pathname) {
    case 'groups/[id]/console':
      return <div>CONSOLE</div>;

    case '/groups/[id]/users':
      return <div>USERS</div>;

    default:
      return <div>ABOUT</div>;
  }
};

export default Content;
