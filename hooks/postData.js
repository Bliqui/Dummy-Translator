import {useState} from "react"

export const usePostData = (method) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState("")
  const [data, setData] = useState(null)

  return {
    isLoading,
    isError,
    data,
    callApi: async (data) => {
      setIsLoading(true)

      method(data)
        .then(({data}) => {
          setData(data)
        })
        .catch((err) => {
          setIsError(err)
        })
        .finally(() => setIsLoading(false))
    },
  }
}
