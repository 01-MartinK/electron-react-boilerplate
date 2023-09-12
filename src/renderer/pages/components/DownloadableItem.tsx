import React, { Component, MouseEventHandler } from "react";
import placeholderImage from '../../images/placeholder-400x300.png'

import './DownloadableItem.scss';

import Dialog from "./Dialog";

interface Props {
  title: string,
  image: string,
  size: Int32Array,
  path: string,
}

interface State {
  showDialog: boolean
}

class DownloadableItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      showDialog: false
    }
  }

  openDownloadDialog = (e: any) => {
    this.setState({
      showDialog: true
    })
  }

  closeDownloadDialog = (e: any) => {
    this.setState({
      showDialog: false
    })
  }

  render(): React.ReactNode {
    return(
      <div className="downloadable_item">
        {(this.state.showDialog) ?
        <Dialog
          onExitClick={this.closeDownloadDialog}
          header={<h2>{this.props.title}</h2>}
          content={<h3>{this.props.size} mb</h3>}
          footer={<button className="btn">Download</button>}
        />
        : null}
        <img
          className="banner"
          src={(this.props.image != "") ? `http://localhost:3000/images/${this.props.image}` : placeholderImage}
        />
        <div className="bottom">
          <h3>{this.props.title}</h3>
          <button className="btn" onClick={this.openDownloadDialog}>Download</button>
          <div id="download_bar"/>
        </div>
      </div>
    );
  }
}

export default DownloadableItem;
