import Link from 'next/link'
import style from './footer.module.sass'
import cn from 'classnames'
import { behance, devTo, github } from '../../utils/icons'
import { Column, Row } from '../FlexBox/flexbox'
// import dev from '/assets/icons/devTo.svg'
// import be from '/assets/icons/behance.svg'
// import git from '/assets/icons/github.svg'

export default function Footer() {
  return (
    <footer>
      <div className={style.footer}>
        <Row alignStart>
          <Column sm="6">
            <small>
              <Link href="/">
                <a className="medium">PowerAJBlack</a>
              </Link>
            </small>
          </Column>
          <Column sm="6">
            <ul className={cn(style.community_profiles)}>
              <li className={style.profile_portal}>
                <Link href="/">
                  <a>
                    <i className="icn small">{devTo}</i>
                  </a>
                </Link>
              </li>
              <li className={style.profile_portal}>
                <Link href="/">
                  <a>
                    <i className="icn small">{behance}</i>
                  </a>
                </Link>
              </li>
              <li className={style.profile_portal}>
                <Link href="/">
                  <a>
                    <i className="icn small">{github}</i>
                  </a>
                </Link>
              </li>
            </ul>
          </Column>
        </Row>
      </div>
    </footer>
  )
}
