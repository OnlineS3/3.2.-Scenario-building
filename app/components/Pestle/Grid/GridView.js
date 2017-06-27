import React from 'react';
import { Link } from 'react-router';

import PestleBox from '../PestleBox';

const GridView = ({props}) => {
  const { boxes } = props
  return (
    <div>
      {boxes.map((box, i) => <PestleBox key={i} props={{box: box}} />)}
    </div>
  )
}

export default GridView;
