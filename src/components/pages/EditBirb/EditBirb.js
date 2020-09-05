import React from 'react';

class EditBirb extends React.Component {
  render() {
    const { birbId } = this.props.match.params;

    return (
      <div className="EditBirb">
        <h1>You are editing birb: {birbId}</h1>
      </div>
    );
  }
}

export default EditBirb;
