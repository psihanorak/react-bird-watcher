import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  editBirbEvent = (e) => {
    e.preventDefault();
    const birbId = 'birb10000';
    this.props.history.push(`/edit/${birbId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editBirbEvent}>Edit A Birb</button>
        <Link to='/new'>New Birb</Link>
        <h2> Hey here is a link to a link to a <Link to='/birbs/birb12344556'>Specific Birb</Link></h2>
      </div>
    );
  }
}

export default Home;
