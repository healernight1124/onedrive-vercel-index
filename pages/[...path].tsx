import Head from 'next/head'
import { useRouter } from 'next/router'

import siteConfig from '../config/site.config'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default function Folders() {
  const { query } = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <div className="mx-auto w-full max-w-5xl p-4">
          <nav className="mb-4 flex items-center px-2">
            <Breadcrumb query={query} />
          </nav>
          <FileListing query={query} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
