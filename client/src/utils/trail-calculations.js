'use strict';

const trailCalc = {
  // Naizmith's Rule to calculate estimated hiking time.
  calcEstimatedTime: (elevation, distance) => {
    var hours = ((elevation/600) + (distance*1.60934)/5).toPrecision(2);
    if (hours < 1) {
      var minutes = Math.round(hours * 60);
      return `${minutes} mins`;
    } else {
      return `${hours} hrs`;
    }
  },

};

export default trailCalc;