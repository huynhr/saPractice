import React from 'react';

const List = ({messages}) => {
  return (
    <ul>
      {
        messages.map(text => <li>{text.text}</li>)
      }
    </ul>
  )
}

export default List;