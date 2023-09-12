import * as React from 'react';

import Sidebar from './pages/components/Sidebar';

interface Props {
  children: React.ReactNode
}

class Layout extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): React.ReactNode {
    return(
      <main>
        <Sidebar />
        {this.props.children}
      </main>
    );
  }
}

export default Layout;
