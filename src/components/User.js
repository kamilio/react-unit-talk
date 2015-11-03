import React, { Component } from 'react';

const style = {};

export default ({lastname, firstname, onClick = () => {}}) => {
  return (
    <div className="user" style={style} onClick={onClick}>
      {firstname} {lastname}
    </div>
  )
}
