import { Component } from 'react';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RndCard } from 'src/component/Rnd/RndCard';
import { Grid } from '@material-ui/core';
import { CSSParameter } from 'src/component/Editor/CSSParameter';
import { getAllCSSParameters, isEditableElement } from 'src/component/Editor/utils';

export namespace EditorSpace {
  export interface IState {
    target: HTMLElement | null;
  }

  export interface IProps {

  }
}

export class Editor extends Component<EditorSpace.IProps, EditorSpace.IState> {

  state: EditorSpace.IState = {
    target: null,
  };

  onClick = (event: DocumentEventMap['click']) => {
    let newTarget = event.target;
    let oldTarget = this.state.target;

    if (!(newTarget instanceof HTMLElement)) {
      return;
    }

    if (isEditableElement(newTarget)) {
      if (oldTarget) {
        oldTarget.classList.remove('select-element');
      }
      this.setState({
        target: newTarget,
      });
    }
  }

  componentDidMount(): void {
    document.addEventListener('click', this.onClick);
  }

  componentWillMount(): void {
    document.removeEventListener('click', this.onClick);
  }

  renderEditor = (): any => {
    const { target } = this.state;
    if (!target) {
      return <h1>Pleas select element</h1>
    }

    target.classList.add('select-element');

    return (
      <Grid container style={{ width: '100%', overflowY: 'auto' }}>
        <Grid item xs={12}>
          <CSSParameter name={'className'} value={target.className}/>
        </Grid>
        {getAllCSSParameters(target).map(({ name, value }) => (
          <CSSParameter key={name} name={name} value={value}/>
        ))}
      </Grid>
    );
  }

  render() {
    return (
      <RndCard x={500}>
        {this.renderEditor()}
      </RndCard>
    );
  }
}