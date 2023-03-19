import {TextInput} from "react-native"

import {styles} from "./textArea.styles"

export const TextArea = ({onChangeText, value}) => (
  <TextInput
    onChangeText={onChangeText}
    value={value}
    editable
    multiline
    placeholder="Enter text"
    style={styles.textArea}
  />
)
