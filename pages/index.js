import { ethers } from 'ethers'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [account, setAccount] = useState(null)
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

  const mintftHandler = async () => {
    const { ethereum } = window;
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        console.log(signer)
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Account: {account}</h1>
      <div>
        <button onClick={mintftHandler}>
          Buy
        </button>
      </div>
      <br />
      {account && <Image src='/nft.jpg' width={400} height={400} />}
    </div>
  )
}
