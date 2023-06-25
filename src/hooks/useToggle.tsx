import React, {useState} from 'react';

export default (initialValue:boolean = false) => {
  const [ value, setValue] = useState(initialValue);

  const handleValue = () => setValue( initialValue => !initialValue );
  return [ value , handleValue] as const; 
}