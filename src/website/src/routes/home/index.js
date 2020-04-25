import style from './style';
import { Link } from 'preact-router/match';

const Home = () => (
    <div className={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <Link href="/login">Login</Link>
    </div>
);

export default Home;
