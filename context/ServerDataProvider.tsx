import React from 'react'
import { App, Common } from '@/types'

// Server-side data storage (module-level, scoped per request in Next.js)
// In Next.js App Router, each server component execution is isolated per request
let serverData: {
  webConfig?: App.WebConfig
  navigationConfig?: App.NavigationConfig
} = {}

export function setServerData(data: {
  webConfig?: App.WebConfig
  navigationConfig?: App.NavigationConfig
}) {
  serverData = data
}

export function getServerData() {
  return serverData
}

// Server component wrapper that provides data to children
export function ServerDataProvider({
  children,
  webConfig,
  navigationConfig,
}: {
  children: React.ReactNode
  webConfig?: App.WebConfig
  navigationConfig?: App.NavigationConfig
}) {
  // Set the data for this request
  setServerData({ webConfig, navigationConfig })
  
  return <>{children}</>
}
