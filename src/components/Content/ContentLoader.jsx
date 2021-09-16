import React from 'react';
import ContentLoader from 'react-content-loader';

function MyLoader() {
  return (
    <ContentLoader
      speed={2}
      width={210}
      height={260}
      viewBox="0 0 210 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="30" y="36" rx="10" ry="10" width="150" height="90" />
      <rect x="30" y="143" rx="3" ry="3" width="150" height="15" />
      <rect x="30" y="162" rx="3" ry="3" width="90" height="15" />
      <rect x="30" y="200" rx="8" ry="8" width="80" height="24" />
      <rect x="148" y="195" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
  );
}

export default MyLoader;
