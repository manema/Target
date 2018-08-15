/* eslint-disable */
import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import { object, array, string } from 'prop-types';
import SelectList from 'react-widgets/lib/SelectList';

const List = ({ input, data, valueField, textField}) =>
  <SelectList
    {...input}
    data={data}
    textField={textField}
    valueField={valueField}
    onChange={o => input.onChange(o.id)}
    onBlur={_ => input.onBlur()} 

  />;

List.propTypes = {
  input: object.isRequired,
  data: array,
  valueField: string,
  textField: string

};

export default List;
