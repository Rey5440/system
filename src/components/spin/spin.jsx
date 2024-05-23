import { useState } from 'react';
import javascript from '../../images/JavascriptIcon.png';
import css from '../../images/css-3.png';
import html from '../../images/html-5.png';
import gmail from '../../images/GmailIcon.png';
import linkedin from '../../images/LinkedinIcon.png';
import node from '../../images/NodejsIcon.png';
import react from '../../images/ReactIcon.png';
import redux from '../../images/ReduxIcon.png';
import whatsapp from '../../images/WhatsappIcon.png';
import postgresIcon from '../../images/PostgresIcon.png';
import expressIcon from '../../images/ExpressIcon.png';
const urlBack = import.meta.env.VITE_URLBACK;
import './spin.css';
import axios from 'axios';

const Spin = () => {
    const images = [javascript, css, html, gmail, linkedin, node, react, redux, whatsapp, postgresIcon, expressIcon];
    const [random, setRandom] = useState({
        primero: [10, 10, 10],
        segundo: [10, 10, 10],
        tercero: [10, 10, 10],
        cuarto: [10, 10, 10],
        quinto: [10, 10, 10],
    })
    const [prevRandom, setPrevRandom] = useState({
        primero: [10, 10, 10],
        segundo: [10, 10, 10],
        tercero: [10, 10, 10],
        cuarto: [10, 10, 10],
        quinto: [10, 10, 10],
    })
    const [animate, setAnimate] = useState(false);
    const [rolling, setRolling] = useState(false)
    const randomHandle = async () => {
        try {
            const response = await axios.get(`${urlBack}/random1`);

            setRandom({
                primero: [...prevRandom.primero, ...response.data.primero],
                segundo: [...prevRandom.segundo, ...response.data.segundo],
                tercero: [...prevRandom.tercero, ...response.data.tercero],
                cuarto: [...prevRandom.cuarto, ...response.data.cuarto],
                quinto: [...prevRandom.quinto, ...response.data.quinto],
            });
            setPrevRandom({
                primero: [10, 10, 10],
                segundo: [10, 10, 10],
                tercero: [10, 10, 10],
                cuarto: [10, 10, 10],
                quinto: [10, 10, 10],
            })
            setAnimate(false);  // Reset animation
            setTimeout(() => setAnimate(true), 0);  // Restart animation
            console.log(random.primero)
        } catch (error) {
            console.error('Error al obtener el random1:', error);
        }
    };
    return (
        <div>
            <h2>Estás en Spin</h2>
            <div className='Container'>
                {random && random.primero && (
                    <div className='Content'>
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
                {random && random.segundo && (
                    <div className='Content'>
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
                {random && random.tercero && (
                    <div className='Content'>
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
                {random && random.cuarto && (
                    <div className='Content'>
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
                {random && random.quinto && (
                    <div className='Content'>
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
            <button onClick={randomHandle}>Girar</button>
        </div>
    );
}

export default Spin;
