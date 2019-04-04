import React from 'react' ;
import PropTypes from 'prop-types';

const Display = ({formula, value}) => (
  <div id='display'>
    <div id='formula'>{formula.replace('*', '×')}</div>
    <div id='output'>{value.replace('*', '×')}</div>
  </div>
);

export default Display ;

Display.propTypes = {
  formula : PropTypes.string,
  value : PropTypes.string
}


