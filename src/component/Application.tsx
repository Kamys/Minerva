import { Component } from 'react';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import './Application.scss';
import { RndCard } from 'src/component/Rnd/RndCard';
import { Editor } from 'src/component/Editor/Editor';

export namespace ApplicationSpace {
  export interface IState {
  }

  export interface IProps {

  }
}

export class Application extends Component<ApplicationSpace.IProps, ApplicationSpace.IState> {

  state: ApplicationSpace.IState = {};


  render() {
    return (
      <>
        <RndCard>
          <div className={'edit-container'}>
            <h1 style={{width: '200px'}}>Hello wolrld!</h1>
            <h2>Simple text</h2>
            <p>This is Minerva</p>
          </div>
        </RndCard>
        <Editor/>
      </>
    );
  }
}