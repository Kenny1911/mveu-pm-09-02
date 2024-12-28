import {Api, FakeApi, FetchApi} from "./api";

const apiUrl = process.env.REACT_APP_API || ''
export const api: Api = apiUrl ? new FetchApi(apiUrl) : new FakeApi()
