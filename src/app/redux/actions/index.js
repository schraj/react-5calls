// export const ADD_ISSUE = 'ADD_ISSUE'
// export const ADD_INACTIVE_ISSUE = 'ADD_INACTIVE_ISSUE'
// export const ADD_ACTIVE_ISSUE = 'ADD_ACTIVE_ISSUE'
// export const SET_TOTAL_CALLS = 'SET_TOTAL_CALLS'
// export const SET_SPLIT_DISTRICT = 'SET_SPLIT_DISTRICT'

export const SET_REMOTE_DATA = 'SET_REMOTEDATA'

export const SET_ADDRESS = 'SET_ADDRESS'

export const SET_GEOLOCATION_INFO = 'SET_GEOLOCATION_INFO'

export const SET_GEOLOCATION = 'SET_GEOLOCATION'
export const SET_GEOCACHETIME = 'SET_GEOCACHETIME'
export const SET_ALLOWBROWSERGEO = 'SET_ALLOWBROWSERGEO'
export const SET_CACHEDCITY = 'SET_CACHEDCITY'
export const SET_USERSTATS = 'SET_USERSTATS'
export const SET_ASKINGLOCATION = 'SET_ASKINGLOCATION'
export const SET_FETCHINGLOCATION = 'SET_FETCHINGLOCATION'
export const SET_LOCATIONFETCHTYPE = 'SET_LOCATIONFETCHTYPE'
export const SET_CONTACTINDICES = 'SET_CONTACTINDICES'
export const SET_COMPLETEDISSUES = 'SET_COMPLETEDISSUES'
export const SET_SHOWFIELDOFFICENUMBERS = 'SET_SHOWFIELDOFFICENUMBERS'
export const SET_DEBUG = 'SET_DEBUG'

export const setRemoteData = (remoteData) => ({
  type: SET_REMOTE_DATA,
  remoteData: remoteData,
})

export const setGeolocationInfo = (info) => ({
  type: SET_GEOLOCATION_INFO,
  remoteData: info,
})

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  remoteData: address,
})
