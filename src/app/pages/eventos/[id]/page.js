"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import "./style.css";
import eventosData from '../../../data/eventos.json';

export default function Page() {
    const params = useParams();
    const [evento, setEvento] = useState(null);

    useEffect(() => {
        if (params?.id) {
            const foundEvent = eventosData.find(x => x.id.toString() === params.id.toString());
            setEvento(foundEvent);
        }
    }, [params?.id]);

    return (
        <main className='container'>
            {
                !evento ? "Carregando..." :
                    <>
                        <h1>{evento.titulo}</h1>
                        <p>{evento.amostra}</p>
                        <section className='geral-eventos'>
                            <section className='conteiner-img-evento'>
                                <Image
                                    src={evento.imagem}
                                    alt={`Imagem do evento: ${evento.titulo}`}
                                    fill
                                    className="img_evento"
                                />

                            </section>
                            
                            {evento.conteudo.map((paragrafo, pIndex) => (
                                <p key={pIndex}>{paragrafo}</p>
                            ))}

                        </section>
                        
                    </>
            }
        </main>
    )
}