
/**
 * This is a custom component used to stop the Server-Side Rendering (SSR)
 * at a certain point so that some elements aren't included in the SSR source.
*/

import dynamic from 'next/dynamic';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NoSSR = (props: any) => (
  <React.Fragment>{props.children}</React.Fragment>
)



export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false
})
