import siteConfig from './site.config'
import { useRouter } from 'next/router'

const YEAR = new Date().getFullYear()
const EDIT_URL_BASE = 'https://prose.io/#juandjara/nextra-blog/tree/master/pages'
const URL_WITH_EDIT = ['/', '/posts', '/projects']

export default function Footer() {
  const router = useRouter()
  const firstSegment = router.pathname.split('/').slice(0, 2).join('/')
  const hasEdit = URL_WITH_EDIT.indexOf(firstSegment) !== -1
  const editURL = `${EDIT_URL_BASE}${firstSegment}`

  return (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © {siteConfig.name}.
      <a href="/feed.xml">RSS</a>
      {hasEdit && (
        <a style={{ paddingRight: 8 }} href={editURL}>Edit</a>
      )}
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}