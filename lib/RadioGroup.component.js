import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {View} from 'react-native';
import map from 'lodash.map';
import noop from 'lodash.noop';
import result from 'lodash.result';
import findindex from 'lodash.findindex';
import RadioButton from './RadioButton.component';
import styles from './RadioGroup.style';

class RadioGroup extends Component {
  state = {
    selected: findindex(this.props.radioGroupList, ['value', this.props.initialValue])
  }

  radioSelect = (key, value) => {
    this.setState({selected: key});
    this.props.onChange(value);
  }
  render () {
    const {selected} = this.state;
    const {radioGroupList, containerStyle, buttonContainerStyle, buttonTextStyle,
    buttonContainerActiveStyle, buttonContainerInactiveStyle, buttonTextActiveStyle,
    buttonTextInactiveStyle} = this.props;

    const radioGroup = map(radioGroupList, (radiocomp, index) =>

      <RadioButton key={index} label={result(radiocomp, 'label', '')}
        value={result(radiocomp, 'value', '')} index={index}
        radioSelect={this.radioSelect} active={selected === index}
        buttonContainerStyle={buttonContainerStyle} buttonTextStyle={buttonTextStyle}
        buttonContainerActiveStyle={buttonContainerActiveStyle} buttonContainerInactiveStyle={buttonContainerInactiveStyle}
        buttonTextActiveStyle={buttonTextActiveStyle} buttonTextInactiveStyle={buttonTextInactiveStyle}/>
    );

    return (
      <View style={[styles.container, containerStyle]}>
        {radioGroup}
      </View>);
  }
}
RadioGroup.defaultProps = {
  radioGroupList: [], // [{label: '', value: ''}]
  onChange: noop, // CallBack with the selected radio button value
  initialValue: '', // VALUE of option to be intially selected
  containerStyle: {},
  buttonContainerStyle: {},
  buttonTextStyle: {},
  buttonContainerActiveStyle: {},
  buttonContainerInactiveStyle: {},
  buttonTextActiveStyle: {},
  buttonTextInactiveStyle: {}
};
RadioGroup.propTypes = {
  radioGroupList: Proptypes.array.isRequired,
  onChange: Proptypes.func,
  initialValue: Proptypes.string,
  containerStyle: Proptypes.object,
  buttonContainerStyle: Proptypes.object,
  buttonTextStyle: Proptypes.object,
  buttonContainerActiveStyle: Proptypes.object,
  buttonContainerInactiveStyle: Proptypes.object,
  buttonTextActiveStyle: Proptypes.object,
  buttonTextInactiveStyle: Proptypes.object
};
export default RadioGroup;
