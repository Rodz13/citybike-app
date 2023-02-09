import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import { fetchNetworkDetails, fetchNetworksList } from './api'
import { getDummyNetworkDetails, getDummyNetworkDetailsApiResponse, getDummyNetworksList, getDummyNetworksListApiResponse } from '../test-helpers'

let consoleErrorSpy: jest.SpyInstance
let mock: AxiosMockAdapter

beforeAll(() => {
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  mock = new AxiosMockAdapter(axios)
})

afterEach(() => {
  mock.reset()
})

afterAll(() => {
  consoleErrorSpy.mockRestore()
})

describe('fetchNetworksList', () => {
  it('returns the list of networks', async () => {
    mock.onGet().reply(200, getDummyNetworksListApiResponse())
    expect(await fetchNetworksList()).toEqual(getDummyNetworksList())
  })

  it('returns false if the request fails', async () => {
    mock.onGet().abortRequest()
    expect(await fetchNetworksList()).toBe(false)
  })

  it('returns false after an unexpected response', async () => {
    mock.onGet().reply(200, {
      foo: 'bar',
    })
    expect(await fetchNetworksList()).toBe(false)
  })
})

describe('fetchNetworkDetails', () => {
  it('returns the network details', async () => {
    mock.onGet().reply(200, getDummyNetworkDetailsApiResponse())
    expect(await fetchNetworkDetails('velib')).toEqual(getDummyNetworkDetails())
  })

  it('returns false if the request fails', async () => {
    mock.onGet().abortRequest()
    expect(await fetchNetworkDetails('velib')).toBe(false)
  })

  it('returns false after an unexpected response', async () => {
    mock.onGet().reply(200, {
      foo: 'bar',
    })
    expect(await fetchNetworkDetails('velib')).toBe(false)
  })
})
