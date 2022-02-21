import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../Components/preview-collection/preview-collection.component';
class shopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div>
        {collection.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default shopPage;
