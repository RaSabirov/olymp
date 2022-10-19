import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    viewBox='0 0 390 590'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='0' rx='0' ry='0' width='406' height='50' />
    <rect x='0' y='60' rx='0' ry='0' width='406' height='282' />
    <rect x='0' y='352' rx='0' ry='0' width='406' height='27' />
    <rect x='0' y='419' rx='0' ry='0' width='186' height='35' />
    <rect x='219' y='419' rx='0' ry='0' width='186' height='35' />
    <rect x='0' y='457' rx='0' ry='0' width='186' height='35' />
    <rect x='219' y='457' rx='0' ry='0' width='186' height='35' />
    <rect x='0' y='495' rx='0' ry='0' width='186' height='35' />
    <rect x='218' y='495' rx='0' ry='0' width='186' height='35' />
    <rect x='0' y='537' rx='0' ry='0' width='406' height='45' />
  </ContentLoader>
);

export default Sceleton;
