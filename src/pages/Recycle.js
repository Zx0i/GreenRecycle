import React from 'react';
import '../pages/Recycle.css'

import SearchFilter from '../SearchFilter';
function Recycle() {
  return (
    <body>
      <div className='recycle'>
        <h1>Recycle Facilities for Textile Drop-Off</h1>
      </div>
      <div className='map'>
        <iframe width="805" height="605" src="https://data.cityofnewyork.us/dataset/Textile-Drop-Off-Locations-in-NYC-Map-/xi6j-55dx/embed?width=800&height=600">
        </iframe>
        <div className="box1">
          <div className='search'>
            <h2>Search for your Nearest Location</h2>
            <SearchFilter />
          </div>
        </div>
      </div>



    </body>


  );
}

export default Recycle;
