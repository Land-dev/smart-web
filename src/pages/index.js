import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@component/components/Layout'
import HexbinMap from "@component/components/HexbinMap"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout>
    </Layout>
    <HexbinMap></HexbinMap>
    </>
  )
}
