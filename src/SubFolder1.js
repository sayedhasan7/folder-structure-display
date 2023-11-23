import React from 'react'
import SubFolder2 from './SubFolder2';

function SubFolder1({ data, iconcolor }) {
  return (
        <div>
            {data.map((item, index) => (
                <SubFolder2 key={index} {...item} iconcolor={iconcolor} />
            ))}
        </div>
    );
}

export default SubFolder1