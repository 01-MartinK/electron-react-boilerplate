import React, { Component, ReactNode } from "react";

import './Dialoges.scss';

interface Props {
  header: ReactNode
  content: ReactNode
  footer: ReactNode
  onExitClick: (e: any) => void
}

interface State {
  mouseOutside: boolean,
}

class Dialog extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      mouseOutside: true
    }
  }

  onExitClick = (e: any) => {
    if(this.state.mouseOutside)
      this.props.onExitClick(e);
  }

  onMouseOutside = (e: any) => {
    this.setState({
      mouseOutside: true
    })
  }

  onMouseInside = (e: any) => {
    this.setState({
      mouseOutside: false
    })
  }

  render(): React.ReactNode {
    return (
      <div className="Dialog" onClick={this.onExitClick}>
        <div className="Dialog__container" onMouseEnter={this.onMouseInside} onMouseLeave={this.onMouseOutside}>
          <div className="Dialog__header">
            {this.props.header}
          </div>
          <div className="Dialog__content">
            {this.props.content}
          </div>
          <div className="Dialog__footer">
            {this.props.footer}
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog;
