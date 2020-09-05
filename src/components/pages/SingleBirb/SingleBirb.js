import React, { useState, useEffect } from 'react';
import moment from 'moment';

import birbsData from '../../../helpers/data/birbsData';

const SingleBirb = (props) => {
  const [birb, setBirb] = useState({});

  useEffect(() => {
    const { birbId } = props.match.params;

    birbsData.getBirbById(birbId)
      .then((res) => setBirb(res.data))
      .catch((err) => console.error('get single birb failed', err));
  }, [props.match.params]);

  return (
    <div className="SingleBirb mt-3 p-3 bg-success rounded">
      <h1>Welcome to the {birb.type} page</h1>
      <p>Bird seen at: {birb.location}</p>
      <p>Size: {birb.size}</p>
      <p>Colors: {birb.color}, {birb.altColor}</p>
      <p>Last seen on: {moment(birb.seenAt).format('MMMM Do YYYY, h:mma')}</p>
      <p>Note: {birb.notes}</p>
      <p>Was Sleeping: {birb.wasSleeping ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default SingleBirb;
