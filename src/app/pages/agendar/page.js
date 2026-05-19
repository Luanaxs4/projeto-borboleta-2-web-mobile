"use client"
import { useState } from "react";
import "./agendar.css";

export default function Agendar() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCPF] = useState('')
    const [address, setAddress] = useState('')
    const [scheduledDate, setScheduledDate] = useState('')
    const [message, setMessage] = useState('');

    function agendarReparo(ev) {
        ev.preventDefault();

        console.log("Nome:", name)
        console.log("Telefone:", phone)
        console.log("CPF:", cpf)
        console.log("Endereço:", address)
        console.log("Data & hora reparo:", scheduledDate)
        console.log("Mensagem:", message)
    }

    return (
        <main className="form-container">
            <div className="form-wrapper">
                <h1 className="hero-title">Agende já o seu reparo!</h1>
                <form onSubmit={agendarReparo} action="#" method="post">
                    <div className="form-grid">
                        <div className="field-group">
                            <label htmlFor="nome">Nome</label>
                            <input value={name} onChange={(ev) => setName(ev.target.value)} type="text" id="nome" name="nome" placeholder="Insira seu nome aqui..." required />
                        </div>
                        <div className="field-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input value={phone} onChange={(ev) => setPhone(ev.target.value)} type="tel" id="telefone" name="telefone" placeholder="(xx) xxxx-xxxx" required />
                        </div>
                        <div className="field-group">
                            <label htmlFor="cpf">CPF</label>
                            <input value={cpf} onChange={(ev) => setCPF(ev.target.value)} type="text" id="cpf" name="cpf" placeholder="xx.xx.xxx-xx" required />
                        </div>
                        <div className="field-group">
                            <label htmlFor="endereco">Endereço</label>
                            <input value={address} onChange={(ev) => setAddress(ev.target.value)} type="text" id="endereco" name="endereco" placeholder="Rua abc" required />
                        </div>
                        <div className="field-group">
                            <label htmlFor="data_hora">Data & Hora do agendamento</label>
                            <input value={scheduledDate} onChange={(ev) => setScheduledDate(ev.target.value)} type="datetime-local" id="data_hora" name="data_hora" placeholder="xx/xx/xxxx xx:xx" required />
                        </div>
                    </div>
                    <div className="desc-section full-width">
                        <div className="field-group" style={{ gap: "0.5rem" }}>
                            <label htmlFor="descricao">Descreva o reparo necessário...</label>
                            <textarea value={message} onChange={(ev) => setMessage(ev.target.value)} id="descricao" name="descricao" placeholder="Descrição do problema." rows="4" required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn-submit">Solicitar Agendamento</button>
                </form>
            </div>
        </main>
    )
}