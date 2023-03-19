import {useGetData} from "../hooks/getData"
import {APIService} from "../api/service"

const service = new APIService()

export const useGetLanguages = () => useGetData(service.getLanguages)
