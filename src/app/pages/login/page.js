"use client"
import { useState } from "react";
import "./login.css";
import { useRouter } from "next/navigation";

export default function Login() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const router = useRouter();

    function loginColaborador(ev) {
        ev.preventDefault();

        console.log("Usuário:", usuario);
        console.log("Senha:", senha);   

        router.push('/pages/calendario');
    }

    return (
        <main className="form-container-login">
            <div className="form-wrapper">
                <h1 className="hero-title">Bem-vindo Colaborador!</h1>
                <form onSubmit={loginColaborador} action="#" method="post">
                    <div className="form-grid">
                        <div className="field-group">
                            <label htmlFor="usuario">Usuário</label>
                            <input value={usuario} onChange={(ev) => setUsuario(ev.target.value)} type="text" id="usuario" name="usuario" placeholder="Usuário" required />
                        </div>
                        <div className="field-group">
                            <label htmlFor="senha">Senha</label>
                            <input value={senha} onChange={(ev) => setSenha(ev.target.value)} type="password" id="senha" name="senha" placeholder="••••••••" autoComplete="current-password" required />
                        </div>
                    </div>
                    <button type="submit" className="btn-submit">Entrar</button>
                </form>
            </div>
        </main>
    )
}