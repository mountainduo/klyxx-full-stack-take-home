import React from "react"
import GlobalContextProvider from "./src/context/GlobalContextProvider"

// Wrap with Global Context Provider
export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
