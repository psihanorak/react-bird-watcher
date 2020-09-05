import React from 'react';
import DatePicker from 'react-datepicker';
import _ from 'underscore';

import authData from '../../../helpers/data/authData';

import 'react-datepicker/dist/react-datepicker.css';
import birbsData from '../../../helpers/data/birbsData';
// what does our birb look like? You know, as an object
// set up state
// get items off state in render?
// make sure to get the uid from authData before creating birb

class NewBirb extends React.Component {
  state = {
    type: '',
    color: '',
    size: '',
    seenAt: new Date(),
    altColor: '',
    wasSleeping: true,
    location: '',
    notes: '',
  };

  // do the same thing for everything else!
  changeTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  };

  changeColorEvent = (e) => {
    e.preventDefault();
    this.setState({ color: e.target.value });
  }

  changeSizeEvent = (e) => {
    e.preventDefault();
    this.setState({ size: e.target.value });
  }

  changeAltColor = (e) => {
    e.preventDefault();
    this.setState({ altColor: e.target.value });
  }

  changeLocation = (e) => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    this.setState({ notes: e.target.value });
  }

  changeWasSleepingEvent = (e) => {
    this.setState({ wasSleeping: e.target.checked });
  }

  seenAtEvent = (seenAt) => {
    this.setState({ seenAt });
  };

  saveBirb = (e) => {
    e.preventDefault();
    // get birb items off state
    // create new birb object
    // pass that to a data function
    // do something on save?
    const keysIWant = [
      'type',
      'color',
      'size',
      'seenAt',
      'altColor',
      'wasSleeping',
      'location',
      'notes',
    ];

    const newBirb = _.pick(this.state, keysIWant);
    newBirb.uid = authData.getUid();

    birbsData
      .createBirb(newBirb)
      .then((res) => {
        this.props.history.push(`/birbs/${res.data.name}`);
      })
      .catch((err) => console.error('new birb broke', err));
  };

  render() {
    const {
      type,
      color,
      size,
      seenAt,
      altColor,
      wasSleeping,
      location,
      notes,
    } = this.state;

    return (
      <div className="NewBirb col-12">
        <h1>NewBirb</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="birbType">Type</label>
            <input
              type="text"
              className="form-control"
              id="birbType"
              placeholder="Enter Birb Type"
              value={type}
              onChange={this.changeTypeEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbColor">Color</label>
            <input
              type="text"
              className="form-control"
              id="birbColor"
              placeholder="Enter Birb Color"
              value={color}
              onChange={this.changeColorEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbSize">Size</label>
            <input
              type="text"
              className="form-control"
              id="birbSize"
              placeholder="Enter Birb Size"
              value={size}
              onChange={this.changeSizeEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbAltColor">Alt Color</label>
            <input
              type="text"
              className="form-control"
              id="birbAltColor"
              placeholder="Enter Birb Alt Color"
              value={altColor}
              onChange={this.changeAltColor}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbLocation">Location</label>
            <input
              type="text"
              className="form-control"
              id="birbLocation"
              placeholder="Enter Birb Location"
              value={location}
              onChange={this.changeLocation}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbNotes">Notes</label>
            <input
              type="textarea"
              className="form-control"
              id="birbNotes"
              placeholder="Enter Birb Notes"
              value={notes}
              onChange={this.changeNotesEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbWasSleeping">Was Sleeping</label>
            <input
              type="checkbox"
              className="form-control"
              id="birbWasSleeping"
              checked={wasSleeping}
              onChange={this.changeWasSleepingEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbSeenAt" className="mr-2">
              Seen At:{' '}
            </label>
            <DatePicker
              selected={seenAt}
              onChange={this.seenAtEvent}
              showTimeSelect
            />
          </div>
          <button className="btn btn-warning" onClick={this.saveBirb}>
            Save Birb
          </button>
        </form>
      </div>
    );
  }
}

export default NewBirb;
