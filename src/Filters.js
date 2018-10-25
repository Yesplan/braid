import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faTimes } from '@fortawesome/free-solid-svg-icons';

class Filters extends Component {
  handleOwnerClick = event => {
    this.props.toggleOwner(Number(event.currentTarget.value));
  };

  handleTypeClick = event => {
    this.props.toggleType(event.currentTarget.value);
  };

  render() {
    const {
      uniqueOwnerIds,
      selectedOwners,
      people,
      selectedTypes,
      selectNextOwner,
      clearOwners
    } = this.props;

    return (
      <Fragment>
        <div className="media">
          <div className="media-left">
            <h5 className="subtitle is-5" style={{ lineHeight: '1.8' }}>
              By owner
            </h5>
          </div>
          <div className="media-content">
            <div className="field is-grouped is-grouped-multiline">
              {uniqueOwnerIds.map(id => (
                <p className="control" key={id}>
                  <button
                    key={id}
                    value={id}
                    className={`button is-rounded is-uppercase ${
                      selectedOwners.indexOf(id) !== -1 ? 'is-primary' : ''
                    }`}
                    onClick={this.handleOwnerClick}
                  >
                    {people[id].initials}
                  </button>
                </p>
              ))}

              <div
                className=" field has-addons"
                style={{ marginBottom: '.75rem' }}
              >
                <p className="control">
                  <button
                    key="next"
                    className="button"
                    onClick={selectNextOwner}
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faForward} />
                    </span>
                    <span>Next</span>
                  </button>
                </p>

                <p className="control">
                  <button
                    key="clear"
                    className="button"
                    onClick={clearOwners}
                    disabled={selectedOwners.length === 0 ? true : false}
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <span>Clear</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="media is-marginless" style={{ border: '0' }}>
          <div className="media-left">
            <h5 className="subtitle is-5" style={{ lineHeight: '1.8' }}>
              By type
            </h5>
          </div>
          <div className="media-content">
            <div className="buttons">
              {['feature', 'bug', 'chore'].map(id => (
                <button
                  key={id}
                  value={id}
                  className={`button is-rounded is-uppercase ${
                    selectedTypes.indexOf(id) !== -1 ? 'is-primary' : ''
                  }`}
                  onClick={this.handleTypeClick}
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Filters;
