import { Inter } from 'next/font/google'
import Layout from '@component/components/Layout'
import Hex from "@component/components/Hex"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Layout>
    </Layout>
    <Hex></Hex>
    
    </>
  )
}
