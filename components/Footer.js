import siteConfig from '../site.config'

const YEAR = new Date().getFullYear()
const EDIT_URL = 'https://prosecms.netlify.app/#juandjara/nextra-blog/tree/master/pages'

export default function Footer() {
  return (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © {siteConfig.name}.
      <a href="/feed.xml">RSS</a>
      <a target="_blank" rel="noreferrer" style={{ paddingRight: 8 }} href={EDIT_URL}>Edit</a>
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
