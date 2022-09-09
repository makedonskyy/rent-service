import React from 'react';
import mapgl from '@2gis/mapgl';

export default function Map() {
  const map = new mapgl.Map('map', {
    key: 'Your API access key',
    center: [55.31878, 25.23584],
    zoom: 13,
  });
  return (
    <div className="map" />
  );
}
