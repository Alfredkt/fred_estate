// lib/withAuth.js
import { getSession } from 'next-auth/react';

export function withAuth(gssp) {
  return async (context) => {
    const { req } = context;
    const session = await getSession({ req });

    if (!session) {
      return {
        redirect: {
          destination: '/auth/signin',
          permanent: false,
        },
      };
    }

    return gssp ? await gssp(context, session) : { props: { session } };
  };
}
