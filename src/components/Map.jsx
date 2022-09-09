import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';
// import MapWrapper from './MapWrapper';

export default function Map() {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: [55.31878, 25.23584],
        zoom: 13,
        key: 'ee12180b-57c5-4c59-b3a2-6a198e86bf66',
      });
    });

    // Удаляем карту при размонтировании компонента
    return () => map && map.destroy();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MapWrapper />
    </div>
  );
}

const MapWrapper = React.memo(
  () => (<div id="map-container" style={{ width: '100%', height: '100%' }} />),
  () => true,
);

// import mapgl from '@2gis/mapgl';

// export default function Map() {
//   useEffect(() => {
//   }, []);

//   const map = new mapgl.Map('container', {
//     key: 'ee12180b-57c5-4c59-b3a2-6a198e86bf66',
//     center: [55.31878, 25.23584],
//     zoom: 13,
//     style: 'c080bb6a-8134-4993-93a1-5b4d8c36a59b',
//   });
//   const marker = new mapgl.Marker(map, {
//     coordinates: [55.31878, 25.23584],
//   });

//   return (
//     <div className="map" id="container" />
//   );
// }
