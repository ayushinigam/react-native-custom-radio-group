import RadioGroup from 'react-native-custom-radio-group';
import React, {Component} from 'react';
import {Text, View} from 'react-native';

const radioGroupData = [{
  label: 'Car',
  value: 'transport_car'
}, {
  label: 'Bike',
  value: 'transport_bike'
}, {
  label: 'Bus',
  value: 'transport_bus'
}];

export default class Example extends Component {
  state = {
    val: 'No transport selected'
  }
  onChange = (value) => {
    this.setState({val: value});
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center', paddingTop: 100}}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}> Select transport: </Text>
          <View style={{paddingHorizontal: 40, paddingTop: 20}}><RadioGroup radioGroupList={radioGroupData} onChange={this.onChange}/></View>
          <Text style={{textAlign: 'center', fontSize: 14, paddingTop: 20}}> Selected transport value:</Text>
          <Text style={{textAlign: 'center', fontSize: 14}}>{this.state.val} </Text>
        </View>
      </View>
    );
  }
}
