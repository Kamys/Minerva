import { Component } from 'react';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Grid, TextField } from '@material-ui/core';

export namespace CSSParameterSpace {
  export interface IState {

  }

  export interface IProps {
    name: string,
    value: any,
  }
}

const displayType = {
  className: (name: string, value: string) => (
    <TextField
      fullWidth
      multiline
      rows={2}
      label={name}
      value={value}
      margin="normal"
    />
  ),
}

export class CSSParameter extends Component<CSSParameterSpace.IProps, CSSParameterSpace.IState> {

  state: CSSParameterSpace.IState = {};

  render() {
    const { name, value } = this.props;

    const displayTypeElement = displayType[name];

    if (displayTypeElement) {
      return displayTypeElement(name, value);
    } else {
      return (
        <TextField
          fullWidth
          label={name}
          value={value}
          margin="normal"
        />
      );
    }
  }
}