import axios from "axios"
import {API_KEY} from "dotenv"

const languagesEndpoint = "/languages"

const baseUrl = "https://google-translate1.p.rapidapi.com/language/translate/v2"

export class APIService {
  async getLanguages() {
    const {data} = await axios.get(baseUrl + languagesEndpoint, {
      headers: {
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
    })

    return data
  }

  async getTranslation({textToTranslate, translateFrom, translateTo}) {
    const encodedParams = new URLSearchParams()
    encodedParams.append("q", textToTranslate)
    encodedParams.append("target", translateTo)
    encodedParams.append("source", translateFrom)

    const options = {
      method: "POST",
      url: baseUrl,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: encodedParams,
    }

    const {data} = await axios.request(options)

    return data
  }
}
