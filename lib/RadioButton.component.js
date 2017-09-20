import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {Text, TouchableWithoutFeedback, View } from 'react-native';
import noop from 'lodash.noop';
import styles from './RadioButton.style';

class RadioButton extends Component {
  onToggle = () => {
    const {radioSelect, value, index} = this.props;
    radioSelect(index, value);
  }
  render () {
    const {active, label, buttonContainerStyle, buttonTextStyle,
    buttonContainerActiveStyle, buttonContainerInactiveStyle, buttonTextActiveStyle,
    buttonTextInactiveStyle} = this.props;

    const activeContainerStyles = active ? [styles.active, buttonContainerActiveStyle] : [styles.inactive, buttonContainerInactiveStyle];
    const activeTextStyles = active ? [styles.activeText, buttonTextActiveStyle] : [styles.inactiveText, buttonTextInactiveStyle];
    return (
      <TouchableWithoutFeedback onPress={this.onToggle}>
        <View style={[styles.container, buttonContainerStyle, activeContainerStyles]}>
          <Text style={[styles.text, buttonTextStyle, activeTextStyles]}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>);
  }
}
RadioButton.defaultProps = {
  index: 0,
  active: false,
  label: '',
  value: '',
  radioSelect: noop,
  buttonContainerStyle: {},
  buttonTextStyle: {},
  buttonContainerActiveStyle: {},
  buttonContainerInactiveStyle: {},
  buttonTextActiveStyle: {},
  buttonTextInactiveStyle: {}
};
RadioButton.propTypes = {
  index: Proptypes.number,
  active: Proptypes.bool,
  label: Proptypes.string,
  value: Proptypes.string,
  radioSelect: Proptypes.func,
  buttonContainerStyle: Proptypes.object,
  buttonTextStyle: Proptypes.object,
  buttonContainerActiveStyle: Proptypes.object,
  buttonContainerInactiveStyle: Proptypes.object,
  buttonTextActiveStyle: Proptypes.object,
  buttonTextInactiveStyle: Proptypes.object
};
export default RadioButton;
