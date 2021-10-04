import React, { createContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = (props) => {
  const [web3, setWeb3] = useState(props.web3)
  const [account, setAccount] = useState(props.account)
  return <GlobalContext.Provider value={{ web3, setWeb3, account, setAccount }} {...props} />
}

export const useGlobal = () => React.useContext(GlobalContext)

export const GlobalConsumer = GlobalContext.Consumer
