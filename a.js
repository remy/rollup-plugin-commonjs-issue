import Loadable from 'react-loadable';

const LoadingComponent = <p>Loading…</p>;

// main pages async loading
const Module = Loadable({
  loader: () => import(/* webpackChunkName: "page-index" */ './b'),
  loading: LoadingComponent,
});

export default Module;
