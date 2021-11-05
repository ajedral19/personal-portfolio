import Layout from '../components/Layout/layout'
import { getData } from '../lib/data'

export async function getStaticPaths() {
  const paths = null
  return { paths, fallback: false }
}

export async function getStatitProps({ params }) {
  const portfolio = await getData('json')
  return { props: { portfolio } }
}

export default function Sample({ sampleData }) {
  return <Layout></Layout>
}
