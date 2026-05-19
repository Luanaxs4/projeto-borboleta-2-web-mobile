"use client"
import { useState, useEffect } from "react";
import "./calendario.css";

export default function Calendario() {
    const dayInMiliseconds = 1000 * 60 * 60 * 24;
    const [initDate, setInitDate] = useState(null);

    useEffect(() => {
        const currDate = new Date();
        const currDayOfWeek = currDate.getDay();
        const initial = new Date(currDate.getTime() - (currDayOfWeek * dayInMiliseconds));
        setInitDate(initial);
    }, []);

    const setDateViz = (increment) => {
        setInitDate((prevDate) => new Date(prevDate.getTime() + (7 * dayInMiliseconds * increment)));
    };

    if (!initDate) return null; 

    const endDate = new Date(initDate.getTime() + (6 * dayInMiliseconds));

    const formatDate = (date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    const weekPt = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
    ];

    const shortWeekPt = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    return (
        <main>
            <section className="container">
                <h1>Reparos agendados</h1>
                <div className="container-data-info">
                    <h2>
                        <span className="date-from">{formatDate(initDate)}</span>
                        {" - "}
                        <span className="date-to">{formatDate(endDate)}</span>
                    </h2>
                    <div className="date-info-btns">
                        <button className="prev-date-btn" onClick={() => setDateViz(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20px">
                                <path fill="black" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                            </svg>
                        </button>
                        <button className="next-date-btn" onClick={() => setDateViz(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20px">
                                <path fill="black" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="container-data-items">
                    {weekPt.map((dayName, index) => {
                        const tempDate = new Date(initDate.getTime() + (dayInMiliseconds * index));
                        return (
                            <div className="ditem" key={index}>
                                <h3>{shortWeekPt[index]}</h3>
                                <div className="ditems-rect">
                                    <p>Aqui ficarão os dados de agendamentos para o dia {formatDate(tempDate)} ({dayName})</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}