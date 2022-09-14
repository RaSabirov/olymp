import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
	<ContentLoader
		speed={2}
		width={390}
		height={590}
		viewBox='0 0 390 590'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='0' y='348' rx='0' ry='0' width='370' height='23' />
		<rect x='0' y='0' rx='0' ry='0' width='370' height='40' />
		<rect x='0' y='53' rx='0' ry='0' width='370' height='282' />
		<rect x='-1' y='388' rx='0' ry='0' width='179' height='32' />
		<rect x='187' y='388' rx='0' ry='0' width='179' height='32' />
		<rect x='0' y='432' rx='0' ry='0' width='179' height='32' />
		<rect x='187' y='432' rx='0' ry='0' width='179' height='32' />
		<rect x='0' y='475' rx='0' ry='0' width='179' height='32' />
		<rect x='187' y='475' rx='0' ry='0' width='179' height='32' />
		<rect x='64' y='518' rx='0' ry='0' width='223' height='20' />
	</ContentLoader>
);

export default Sceleton;
