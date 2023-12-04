import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Busca from '../Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri';

const iconeProps = {
    color: 'white',
    size: 24
}



function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    return (<nav className={styles.nav}>
        <Logo onClick={() => navigate('/')}/>
        <div className={styles.links}>
            <div>
                <Link to='/' className={classNames(styles.link, {
                    [styles.selected]: window.location.pathname === '/'
                })}>
                    Página inicial
                </Link>
            </div>
        </div>
        <div className={styles.busca}>
            <Busca />
        </div>
        <div className={styles.icones}>
            <Link to="/carrinho">
            {location.pathname === '/carrinho'
                ? <RiShoppingCartFill {...iconeProps} />
                : <RiShoppingCart2Line {...iconeProps} />
            }
            </Link>
        </div>
    </nav>);
}

export default Navbar;