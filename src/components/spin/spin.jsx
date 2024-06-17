import { useEffect, useState } from 'react';
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
        primero: [10, 10, 10, 10],
        segundo: [10, 10, 10, 10],
        tercero: [10, 10, 10, 10],
        cuarto: [10, 10, 10, 10],
        quinto: [10, 10, 10, 10],
    });
    const [animate, setAnimate] = useState(false);
    const [ready, setReady] = useState(true);
    const [selectedValue, setSelectedValue] = useState('');


    const randomHandle = async () => {
        try {
            const response = await axios.post(`${urlBack}/random1`, {value: selectedValue});

            setRandom({
                primero: [...random.primero.slice(-4), ...response.data.primero],
                segundo: [...random.segundo.slice(-4), ...response.data.segundo],
                tercero: [...random.tercero.slice(-4), ...response.data.tercero],
                cuarto: [...random.cuarto.slice(-4), ...response.data.cuarto],
                quinto: [...random.quinto.slice(-4), ...response.data.quinto],
            });

            // Reset animation state to trigger reflow
            setTimeout(() => setAnimate(true), 0);
            setAnimate(false)
            setReady(false)

        } catch (error) {
            console.error('Error al obtener el random1:', error);
        }
        setTimeout(() => setReady(true), 1000);
    };


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
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

            <button onClick={randomHandle} disabled={!ready || selectedValue == ''}>Girar</button>
            <div>
                <select value={selectedValue} onChange={handleChange}>
                    <option value="" disabled hidden>Elija un valor</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                </select>
                <p>El valor seleccionado es: {selectedValue}</p>
            </div>
        </div>
    );
}

export default Spin;
