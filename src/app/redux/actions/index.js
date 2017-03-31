export const SET_REMOTE_DATA = 'SET_REMOTEDATA'
export const SET_ADDRESS = 'SET_ADDRESS'
export const SET_GEOLOCATION_INFO = 'SET_GEOLOCATION_INFO'
export const SET_USERSTATS = 'SET_USERSTATS'
export const SET_UISTATE = 'SET_UISTATE'

export const setRemoteData = (remoteData) => ({
  type: SET_REMOTE_DATA,
  remoteData: remoteData
})

export const setGeolocationInfo = (info) => ({
  type: SET_GEOLOCATION_INFO,
  geolocationInfo: info
})

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  address: address
})

export const setUserStats = (userStats) => ({
  type: SET_USERSTATS,
  userStats: userStats
})

export const setUiState = (uiState) => ({
  type: SET_UISTATE,
  uiState: uiState
})
