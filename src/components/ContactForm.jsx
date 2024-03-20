import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    const { name, number, handleInputChange, handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit} >
          <div>
            <label style={{margin:"11px",}}>
              Name
              <input style={{margin:"11px",}}
                type="text"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Number
              <input style={{margin:"10px",}}
                type="tel"
                name="number"
                placeholder="Number"
                required
                value={number}
                onChange={handleInputChange}
              />
              <button type="submit" style={{margin:"10px",}}>Add Contact</button>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;