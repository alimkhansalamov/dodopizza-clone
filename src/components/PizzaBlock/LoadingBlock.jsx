import React from 'react';

import ContentLoader from "react-content-loader"

const LoadingBlock = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="262" rx="3" ry="3" width="280" height="25" />
    <rect x="0" y="304" rx="3" ry="3" width="280" height="84" />
    <rect x="68" y="398" rx="0" ry="0" width="0" height="1" />
    <rect x="133" y="408" rx="22" ry="22" width="148" height="44" />
    <rect x="1" y="413" rx="3" ry="3" width="105" height="40" />
    <circle cx="140" cy="127" r="115" />
  </ContentLoader>
)

export default LoadingBlock;