import React from 'react';

const MapWrapper = React.memo(
  () => <div id="map-container" style={{ width: '100%', height: '100%' }} />,
  () => true,
);

export default MapWrapper;
