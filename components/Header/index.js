import Link from 'next/link';
import Container from '../Container';

const Header = () => (
  <div>
    <nav>
      <Container>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
        </ul>
      </Container>
    </nav>
    <style jsx>{`
      nav{
        background: #512b58;
      }
      ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
      }
      li {
        padding: 20px 10px;
      }
      a {
        text-decoration: none;
        color: #FFFFFF;
        font-family: 'Raleway';
      }
    `}</style>
  </div>
)

export default Header