import React from 'react';
import Preloader from './Preloader';

function withSuspense<WCP>(Component: React.ComponentType<WCP>)  {
	return (props: WCP) => {
		return (
			<React.Suspense fallback={<Preloader />}>
				<Component {...props} />
			</React.Suspense>
		);
	}
}

export default withSuspense;
