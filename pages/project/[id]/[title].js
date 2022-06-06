import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { fetch_parsed_data } from '../../../lib/data'
import NavBar from '../../../components/NavBar/NavBar'
import Footer from '../../../components/Footer/footer'
// import style from '../../../styles/Home.module.sass'
// import Header from '../../../components/header'

const fetchRows = async () => {
  const res = await fetch_parsed_data('json')
  return await res.data.projects.rows
}

export async function getStaticProps() {
  return { props: { projects: await fetchRows() } }
}

export async function getStaticPaths() {
  const rows = await fetchRows()

  const paths = rows.map((post) => ({
    params: {
      id: post.id,
      title: post.title,
    },
  }))

  return { paths, fallback: false }
}

const Project = ({ projects }) => {
  const router = useRouter()
  const { id, title } = router.query
  const [state, setState] = useState({ other_projects: [] })

  useEffect(() => {
    document.title = title
  })

  return (
    <>
      {/* <Header /> */}
      <NavBar container />
      <div className="pt-6 mt-6 mb-6">
        <h1>Post: {id}</h1>
        {projects.map(
          (proj, key) =>
            proj.id === id && (
              <div style={{ background: 'red' }} key={key}>
                {proj.description}
              </div>
            ),
        )}

        <Link href="/">
          <a>go back</a>
        </Link>
      </div>
      <Footer container />
    </>
  )
}

export default Project
