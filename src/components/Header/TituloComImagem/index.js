import styles from './TituloComImagem.module.scss';

export default function TituloComImagem({ 
    titulo, 
    descricao, 
    className = '', 
    imagem,
    children,
}) {
    return (<div class={`${className} ${styles.header}`}>
        <div className={styles['header-texto']}>
            <h1>{titulo}</h1>
            <h2>{descricao}</h2>
            {children}
        </div>
        <div className={styles['header-imagem']}>
            <img 
                alt={titulo} 
                src={imagem}    
            />
        </div>
    </div>)
}