import { useState } from 'react';
import styles from './index.module.css';

export default function Atividade4() {

    const [produto, setProduto] = useState('');
    const [qtd, setQtd] = useState('');
    const [cadastros, setCadastros] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoItem = `${qtd}x ${produto}`;

        setCadastros([...cadastros, novoItem]);

        setProduto('');
        setQtd('');
    };

    return (
        <div className={styles.container}>

            <h1>Atividade 4 - Lista de compra</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>

                <input
                    type="number"
                    placeholder="Qtd"
                    value={qtd}
                    onChange={(e) => setQtd(e.target.value)}
                    className={styles.qtd}
                />

                <input
                    type="text"
                    placeholder="Produto..."
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                    className={styles.produto}
                />

                <button type="submit">
                    Adicionar
                </button>

            </form>

            <div className={styles.lista}>
                {
                    cadastros.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                }
            </div>

        </div>
    );
}