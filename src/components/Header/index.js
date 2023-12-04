import TituloComImagem from './TituloComImagem';
import TituloSemImagem from './TituloSemImagem';

import styles from './Header.module.scss';

export default function header({ titulo, descricao, className = '', imagem}) {
    return (<header className={`${styles.header} ${className}`}>
        {titulo && !imagem && 
            <TituloSemImagem 
                titulo={titulo}
                descricao={descricao}
            />
        }
        {titulo && imagem && 
            <TituloComImagem 
                titulo={titulo}
                descricao={descricao}
                imagem={imagem}
                className={className}
            />
        }
    </header>)
}