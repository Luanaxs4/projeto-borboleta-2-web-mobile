import Logo from "../Logo/logo";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="rodape">
            <section>
                <Logo />
                <p>A inclusão acontece quando se aprende com as diferenças e não com as igualdades.” — Paulo Freire</p>
            </section>
            <section id="nomes">
                <p>&copy; 2026 - Centro de Informação à pessoa com deficiência. Desenvolvidor por: Pedro Lopes, Luana
                    Brito,
                    Louisy Tomazi, Murilo Arevalo e Victor Pereira | Site desenvolvido com software livre</p>
            </section>

        </footer>
    );
}