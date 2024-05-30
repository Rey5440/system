import { useState } from 'react';
import billetes from '../../images/billetes.png';
import campanas from '../../images/campanas.png';
import chanchito from '../../images/chanchito.png';
import copa from '../../images/copa.png';
import diamante from '../../images/diamante.png';
import frutillas from '../../images/frutillas.png';
import limones from '../../images/limones.png';
import monedas from '../../images/monedas.png';
import siete from '../../images/siete.png';
import trebol from '../../images/trebol.png';
import expressIcon from '../../images/ExpressIcon.png';
const urlBack = import.meta.env.VITE_URLBACK;
import './spin.css';
import axios from 'axios';

const Spin = () => {
    const images = [billetes, campanas, chanchito, copa, diamante, frutillas, limones, monedas, siete, trebol, expressIcon];
    const [random, setRandom] = useState({
        primero: [10, 10, 10],
        segundo: [10, 10, 10],
        tercero: [10, 10, 10],
        cuarto: [10, 10, 10],
        quinto: [10, 10, 10],
    });
    const [animate, setAnimate] = useState(false);
    const [ready, setReady] = useState(true);

    const randomHandle = async () => {
        setReady(false);
        try {
            const response = await axios.get(`${urlBack}/random1`);

            setRandom({
                primero: [...random.primero.slice(-3), ...response.data.primero],
                segundo: [...random.segundo.slice(-3), ...response.data.segundo],
                tercero: [...random.tercero.slice(-3), ...response.data.tercero],
                cuarto: [...random.cuarto.slice(-3), ...response.data.cuarto],
                quinto: [...random.quinto.slice(-3), ...response.data.quinto],
            });

            // Toggle animation state
            setAnimate(false);
            setTimeout(() => setAnimate(true), 50); // Small delay to ensure reflow
        } catch (error) {
            console.error('Error al obtener el random1:', error);
        } finally {
            setTimeout(() => setReady(true), 1100); // Ensuring the animation duration is considered
        }
    };

    return (
        <div>
            <h2>Estás en Spin</h2>
            <div className='Container'>
                {random.primero && (
                    <div className={animate ? 'Content1' : 'Content'}>
                        {random.primero.map((num, index) => (
                            <img 
                                key={index} 
                                src={images[num]} 
                                style={{ width: '50px' }} 
                                alt={`Imagen ${num}`} 
                            />
                        ))}
                    </div>
                )}
                {random.segundo && (
                    <div className={animate ? 'Content1' : 'Content'}>
                        {random.segundo.map((num, index) => (
                            <img 
                                key={index} 
                                src={images[num]} 
                                style={{ width: '50px' }} 
                                alt={`Imagen ${num}`} 
                            />
                        ))}
                    </div>
                )}
                {random.tercero && (
                    <div className={animate ? 'Content1' : 'Content'}>
                        {random.tercero.map((num, index) => (
                            <img 
                                key={index} 
                                src={images[num]} 
                                style={{ width: '50px' }} 
                                alt={`Imagen ${num}`} 
                            />
                        ))}
                    </div>
                )}
                {random.cuarto && (
                    <div className={animate ? 'Content1' : 'Content'}>
                        {random.cuarto.map((num, index) => (
                            <img 
                                key={index} 
                                src={images[num]} 
                                style={{ width: '50px' }} 
                                alt={`Imagen ${num}`} 
                            />
                        ))}
                    </div>
                )}
                {random.quinto && (
                    <div className={animate ? 'Content1' : 'Content'}>
                        {random.quinto.map((num, index) => (
                            <img 
                                key={index} 
                                src={images[num]} 
                                style={{ width: '50px' }} 
                                alt={`Imagen ${num}`} 
                            />
                        ))}
                    </div>
                )}
            </div>
            <button onClick={randomHandle} disabled={!ready}>Girar</button>
        </div>
    );
}

export default Spin;
