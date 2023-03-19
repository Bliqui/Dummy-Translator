import {View} from "react-native"
import RNPickerSelect from "react-native-picker-select"

import {inputStyles, styles} from "./languageSelection.styles"

const PLACEHOLDER = "Choose language"

export const LanguageSelection = ({
  options,
  firstInputValue,
  secondInputValue,
  onFirstInputChange,
  onSecondInputChange,
}) => (
  <View style={styles.languagePickerSection}>
    <RNPickerSelect
      style={inputStyles}
      onValueChange={(value) => onFirstInputChange(value)}
      items={options}
      value={firstInputValue}
      placeholder={{label: PLACEHOLDER}}
    />
    <RNPickerSelect
      style={inputStyles}
      onValueChange={(value) => onSecondInputChange(value)}
      items={options}
      value={secondInputValue}
      placeholder={{label: PLACEHOLDER}}
    />
  </View>
)
