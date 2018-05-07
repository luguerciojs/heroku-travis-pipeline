import React, { Component } from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import './style.css';

class MySelect extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedValue: 0
    };

    this.options = [{
      value: 8,
      label: 'ocho'
    }, {
      value: 9,
      label: 'nueve'
    }, {
      value: 0,
      label: 'zero'
    }];

    this.onChange = this.onChange.bind(this);
  }

  onChange({ value }) {
    this.setState({ selectedValue: value });
  }

  render() {
    return (
      <div className="my-select">
        <Select
          clearable={false}
          options={this.options}
          value={this.state.selectedValue}
          onChange={this.onChange}/>
      </div>
    );
  }
}

export default MySelect;
