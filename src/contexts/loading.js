import React, { createContext, useContext, useState } from 'react'
import { Loader } from '../components'

const LoadingContext = createContext({
  loading: false
})

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const startLoading = () => setLoading(true)

  const stopLoading = () => setLoading(false)

  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
      <Loader loading={loading} />
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  return useContext(LoadingContext)
}
