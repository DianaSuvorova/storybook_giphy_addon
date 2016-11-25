import React from 'react';
import getGiph from './getGiph';

const styles = {
  panel: {
    margin: 10,
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#444',
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  }
};

class Panel extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { gif: null, error: false };
  }

  onGetGiph(response) {
    const data = JSON.parse(response);
    const img = data.data.image_url;
    if (img) {
      this.setState({ gif: img, error: false });
    } else {
      this.setState({ gif: null, error: true });
    }
  }

  componentDidMount() {
    const { api } = this.props;

    api.onStory(() => {
      getGiph()
      .then(
        e => this.onGetGiph(e.target.response),
        () => this.setState({ gif: null, error: true })
      );
    });
  }

  render() {
    const content = (this.state.error) ?
      (<div>that is an error</div>) : <img role="presentation" src={this.state.gif} />;
    return (
      <div style={styles.panel}>
        {content}
      </div>
    );
  }
}

export default Panel;
