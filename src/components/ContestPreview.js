import React from 'react';


const ContestPreview = (contests) => (
  <div className ="ContestPreview">
    <div>
      {contests.categoryName}
    </div>
    <div>
      {contests.contestName}
    </div>
  </div>
);

export default ContestPreview;
