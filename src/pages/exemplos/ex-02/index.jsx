import styles from './index.module.css';

function Exemplo02() {

  return (
    <div className={styles.container}>
      <h1>Aula Introdução Vite JS</h1>      
      <h2>Preparo do projeto</h2>
      <h3>Estilização</h3>
      <p>Entendendo uso de css dentro do projeto.</p>
      <label>Exemplo Label</label>
      <small>Exemplo Small</small>
      <div className={styles.containerBlocos}>
        <div className={styles.brancoBranco}></div>
        <div className={styles.brancoCinza}></div>
        <div className={styles.pretoPreto}></div>
        <div className={styles.pretoCinza}></div>
      </div>
    </div>
  )
}

export default Exemplo02;