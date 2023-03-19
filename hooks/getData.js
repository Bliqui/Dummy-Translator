import {useEffect, useState} from "react"

export const useGetData = (method) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState("")
  const [data, setData] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    method()
      .then(({data}) => {
        setData(data)
      })
      .catch((err) => {
        setIsError(err)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return {
    isLoading,
    isError,
    data,
  }
}
