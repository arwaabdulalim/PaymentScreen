import {View, Switch} from 'react-native';
import React, {useState} from 'react';

const Switcher = ({disabled, value, onSwitchChange}) => {
  const [defaultValue, setDefaultValue] = useState(false);
  const handleSwitch = () => setDefaultValue(previousState => !previousState);
  return (
    <View>
      <Switch
        onValueChange={onSwitchChange ? onSwitchChange : handleSwitch}
        value={value ? value : defaultValue}
        disabled={disabled}
      />
    </View>
  );
};

export default Switcher;
