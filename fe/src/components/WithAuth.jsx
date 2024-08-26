import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { Loading } from '@/pages/loading/index';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { isAuthenticated, loading } = useAuth();

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push('/login');
      }
    }, [loading, isAuthenticated]);

    if (loading) {
      return <Loading />;
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;