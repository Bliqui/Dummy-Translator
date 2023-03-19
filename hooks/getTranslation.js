import {APIService} from "../api/service"
import {usePostData} from "./postData"

const service = new APIService()

export const useGetTranslation = () => usePostData(service.getTranslation)
