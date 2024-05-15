import { useEffect, useState } from 'react';
import javascript from '../../images/JavascriptIcon.png';
import css from '../../images/css-3.png';
import html from '../../images/html-5.png';
import gmail from '../../images/GmailIcon.png';
import linkedin from '../../images/LinkedinIcon.png';
import node from '../../images/NodejsIcon.png';
import react from '../../images/ReactIcon.png';
import redux from '../../images/ReduxIcon.png';
import whatsapp from '../../images/WhatsappIcon.png';
import './spin.css';

const Spin = () => {
    const [image, setImage] = useState(false); // Variable para controlar la imagen mostrada
    const [prev, setPrev] = useState(false)
    const [ini, setIni] = useState(false)

    const random = () => {
        let array = [];
        let math = Math.random().toString().slice(2); // Elimina los primeros dos caracteres
        let result = math.split('').map((number) => {
            return parseInt(number); // Convertir el caracter en un número entero
        });
        return result;
    }
    console.log(random());
    

    const handleSpin = () => {
        // Lógica para cambiar la imagen mostrada
        setImage(!image);
    }

    return (
        <div>
            <h2>Estás en Spin</h2>
            <div className='Container'>
                <div className='Content'>
                    <img src={javascript} style={{ width: '50px' }} alt="JavaScript"></img>
                    <img src={css} style={{ width: '50px' }} alt="CSS"></img>
                    <img src={html} style={{ width: '50px' }} alt="HTML"></img>
                    <img src={gmail} style={{ width: '50px' }} alt="Gmail"></img>
                    <img src={linkedin} style={{ width: '50px' }} alt="LinkedIn"></img>
                    <img src={node} style={{ width: '50px' }} alt="Node.js"></img>
                    <img src={react} style={{ width: '50px' }} alt="React"></img>
                    <img src={redux} style={{ width: '50px' }} alt="Redux"></img>
                    <img src={whatsapp} style={{ width: '50px' }} alt="WhatsApp"></img>
                </div>
            </div>
            <button onClick={handleSpin}>Girar</button>
        </div>
    )
}

export default Spin;
