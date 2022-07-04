/* eslint-disable no-throw-literal */
import axios, { AxiosRequestConfig } from 'axios'

async function getRequestHeaders(): Promise<{}> {
  try {
    return {
      then: 'application/json'
    }
  // eslint-disable-next-line no-unreachable
  } catch (error: any) {
    return error
  }
}

export async function apiRestGet(path: string, body = {}): Promise<any> {
  try {
    const requestOptions: AxiosRequestConfig = {
      headers: await getRequestHeaders(),
      params: body
    }

    return await axios.get(path, requestOptions)
  } catch (error: any) {
    throw { error: error?.response?.data || error }
  }
}

export async function apiRestPost(path: string, body: any): Promise<any> {
  try {
    const requestOptions: AxiosRequestConfig = {
      headers: await getRequestHeaders()
    }

    const data = await axios.post(path, body, requestOptions)
    return data
  } catch (error: any) {
    throw { error: error?.response?.data || error }
  }
}

export async function apiRestPatch(path: string, body: any): Promise<any> {
  try {
    const requestOptions: AxiosRequestConfig = {
      headers: await getRequestHeaders()
    }

    return await axios.patch(path, body, requestOptions)
  } catch (error: any) {
    throw { error: error?.response?.data || error }
  }
}

export async function apiRestDelete(path: string, body: any): Promise<any> {
  try {
    const requestOptions: AxiosRequestConfig = {
      headers: await getRequestHeaders()
    }

    const { data } = await axios.delete(path, {
      headers: requestOptions.headers,
      data: body
    })
    return data
  } catch (error: any) {
    throw { error: error?.response?.data || error }
  }
}

export async function apiRestPut(path: string, body: any): Promise<any> {
  try {
    const requestOptions: AxiosRequestConfig = {
      headers: await getRequestHeaders()
    }

    return await axios.put(path, body, requestOptions)
  } catch (error: any) {
    throw { error: error?.response?.data || error }
  }
}
