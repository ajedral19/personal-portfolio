import Head from 'next/head'
import Link from 'next/link'
import cn from 'classnames'
import Banner from '../Banner/banner'

export default function Layout({ children, home }) {
  return (
    <>
      {/* nav here */}
      <Banner />
      <div className={cn('container')}>{children}</div>
      {/* footer here */}
    </>
  )
}
