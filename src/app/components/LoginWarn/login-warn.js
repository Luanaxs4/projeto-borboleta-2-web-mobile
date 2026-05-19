import Link from "next/link";
import "./login-warn.css";
export default function LoginWarn ({isOpen = false, setIsOpen = () => {}}) {
    return (
        <div className="modal-overlay" style={{display: isOpen ? 'flex' : 'none'}}>
            <div className="modal-content">
                <span onClick={(ev) => setIsOpen(false)} id="closeAviso" className="close-btn">&times;</span>
                <div className="modal-body">
                    <i className="icon-warning">⚠️</i>
                    <h3>Funcionalidade em Desenvolvimento</h3>
                    <p>O sistema de login ainda não está pronto. Estamos trabalhando nisso!
                    </p>
                    <Link href={"/pages/calendario"} onClick={(ev) => {
                        setIsOpen(false)
                    }} id="btnOk" className="confirm-btn">Ir ao calendário (demo)</Link>
                </div>
            </div>
        </div>
    );
}