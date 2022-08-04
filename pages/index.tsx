import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListNftAction } from 'store/nft/nft.action';
import { wrapper } from 'store/store';
import { END } from 'redux-saga';

const Home: NextPage = (props: any) => {
  console.log(props);
  const { nfts } = useSelector((state: any) => state);
  console.log(nfts);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(
  //       getListNftAction.request({
  //         page: 1,
  //         pageSize: 8,
  //         sort: 'numberOfView:-1',
  //         where: 'displayOnMarketplace:true',
  //       }),
  //     );
  //   }, [dispatch]);
  return <div>Code goes here...</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      await store.dispatch(getListNftAction.request({}));
      const profileData = store.getState();
      await (store as any).sagaTask.toPromise();
      return {
        props: {
          list: profileData,
        },
      };
    },
);

export default Home;
