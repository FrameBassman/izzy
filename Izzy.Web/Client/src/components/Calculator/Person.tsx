import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import './Person.css';

export class Person extends Component<any, any> {
  render() {
    const {man} = this.props;
    return (
      <div className="person">
        <Input className="person__input" placeholder={man.name()}/>
        <Input className="person__input" placeholder={man.money().toString()}/>
      </div>
    )
  }
}
