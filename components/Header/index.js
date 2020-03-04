import Link from 'next/link';
import Container from '../Container';
import css from '../../styles/scss/Header.scss';

const Header = () => (
  <div className={css.header}>
    <nav>
      <Container>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
        </ul>
      </Container>
    </nav>
  </div>
)

export default Header