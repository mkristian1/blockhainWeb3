import { useEffect } from 'react'
import { useState } from 'react'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [account, setAccount] = useState()
  useEffect(() => {
    const connectWalletHandler = async () => {
      const { ethereum } = window;
      if (ethereum) {
        try {
          const [accounts] = await ethereum.request({ method: 'eth_requestAccounts' })
          setAccount(accounts)
          console.log(accounts, 'account');
        } catch {
          console.log('No authorized');
        }
      }
    }
    connectWalletHandler()
  }, [])
  return (
    <div className={styles.container}>
      Account: {account}
    </div>
  )
}
