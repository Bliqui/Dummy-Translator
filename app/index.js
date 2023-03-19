import {SafeAreaView} from "react-native"

import {TranslationSection} from "../components/TranslationSection/TranslationSection"
import {COLORS} from "../consts/colors"
import PageTemplate from "../templates/pageTemplate/PageTemplate"

const PAGE_TITLE = "Dummy Translate"

const Home = () => {
  return (
    <SafeAreaView>
      <PageTemplate
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTitleStyle: {
            color: COLORS.secondary,
          },
        }}
        pageTitle={PAGE_TITLE}
      />
      <TranslationSection />
    </SafeAreaView>
  )
}

export default Home
