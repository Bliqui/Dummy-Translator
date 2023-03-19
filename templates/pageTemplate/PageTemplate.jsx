import {Stack} from "expo-router"

const PageTemplate = ({pageTitle = "", options, ...props}) => (
  <Stack.Screen
    options={{
      title: pageTitle || "Dummy Translate",
      headerTitleAlign: "center",
      ...options,
    }}
    {...props}
  />
)

export default PageTemplate
