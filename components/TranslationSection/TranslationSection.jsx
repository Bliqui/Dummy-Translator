import {useState} from "react"
import {ScrollView, Button, Alert, ActivityIndicator} from "react-native"

import {COLORS} from "../../consts/colors"
import {useGetLanguages} from "../../hooks/getLanguages"
import {useGetTranslation} from "../../hooks/getTranslation"
import {usePostData} from "../../hooks/postData"
import {formatLanguagesToOptions} from "../../utils/formatOptions"
import {LanguageSelection} from "../LanguageSelection/LanguageSelection"
import {TextArea} from "../TextArea/TextArea"

export const TranslationSection = () => {
  const [firstInputValue, setFirstInputValue] = useState()
  const [secondInputValue, setSecondInputValue] = useState()
  const [textAreaValue, setTextAreaValue] = useState("")

  const {data, isLoading, isError} = useGetLanguages()
  const {callApi, data: translation} = useGetTranslation()

  if (isLoading || !data)
    return <ActivityIndicator size="large" color={COLORS.primary} />

  const formattedOptions = formatLanguagesToOptions(data.languages)

  console.log(translation)

  return (
    <ScrollView>
      <LanguageSelection
        options={formattedOptions}
        firstInputValue={firstInputValue}
        onFirstInputChange={setFirstInputValue}
        secondInputValue={secondInputValue}
        onSecondInputChange={setSecondInputValue}
      />
      <TextArea value={textAreaValue} onChangeText={setTextAreaValue} />
      <Button
        title="Translate"
        onPress={() =>
          callApi({
            textToTranslate: textAreaValue,
            translateFrom: firstInputValue,
            translateTo: secondInputValue,
          })
        }
      />
    </ScrollView>
  )
}
