import React, { Component, ReactNode } from 'react';

import './Store.scss';

import DownloadableItem from './components/DownloadableItem';
import Layout from 'renderer/layout';

interface Props {}

interface Item {
  title: string,
  image: string,
  size: Int32Array,
  path: string
}

interface State {
  downloads: Array<Item>
}

class Store extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      downloads: []
    }
    this.getDownloadList()
  }

  getDownloadList = async () => {
    await fetch('http://localhost:3000/downloads')
    .then((request) => request.json())
    .then((data: Array<Item>) => {
      console.log(data);

      this.setState({
        downloads: data
      })
      console.log("test")
      console.log(this.state.downloads)
    })
  }

  render(): React.ReactNode {
    return(
      <Layout>
        <div className='Store'>
          <div className='grid'>
            {this.state.downloads.map((item, i) => {
              return (
                <DownloadableItem key={i} path={"Pizza.Tower"} size={item.size} title={item.title} image={item.image}/>
              )
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Store;
