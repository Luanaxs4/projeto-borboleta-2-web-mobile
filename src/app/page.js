"use client"
import Image from "next/image";
import "./home.css";
import { useState } from "react";
import Link from "next/link";

import eventosData from './data/eventos.json';


export default function Home() {
  const [eventosShow, setEventosShow] = useState(eventosData);

  function updateEventoShow(idx) {
    const tempEventosShow = [...eventosShow.map((eventoTemp, eventoTempIdx) => {
      if (eventoTempIdx === idx) {
        eventoTemp.showDetails = !eventoTemp.showDetails;
      }
      return eventoTemp;
    })];

    setEventosShow(tempEventosShow);
  }

  const slide = (direction) => {
  const carousel = document.getElementById("carrossel");
  const width = carousel.clientWidth;

  if (direction === "left") {
    carousel.scrollLeft -= width;
  } else {
    carousel.scrollLeft += width;
  }

  if (width===0){
    
  }
};

  return (
    <main>
      <article id="introducao">
        <h1>Centro de Informação à pessoa com deficiência</h1>
        <p>Nosso objetivo é garantir que todas as pessoas tenham acesso à informação, direitos e oportunidades de forma acessível.<br />Precisa reparar seu equipamento de mobilidade? Agende seu reparo conosco aqui!</p>
      </article>

      <article id="texto-sobre-nos">
        <h2>Sobre Nós</h2>
        <section className="conteudo">
          <section className="texto">
            <p>O Centro de Informação à Pessoa com Deficiência é um serviço público dedicado a promover a inclusão, o acesso à informação e o exercício da cidadania. Atuamos oferecendo orientação, acolhimento e suporte a pessoas com deficiência, seus familiares e à sociedade em geral, facilitando o acesso a direitos, serviços e oportunidades.</p>
            <p>Nosso compromisso é garantir um atendimento acessível, humanizado e respeitoso, valorizando a diversidade e contribuindo para a construção de uma sociedade mais justa e inclusiva. Além disso, disponibilizamos apoio por meio de informações sobre benefícios, encaminhamentos e serviços, bem como suporte básico para manutenção de tecnologias assistivas, como cadeiras de rodas e bengalas.</p>
            <p>Acreditamos que a informação é um dos principais caminhos para a inclusão. Por isso, trabalhamos diariamente para conectar pessoas aos seus direitos e promover autonomia, dignidade e qualidade de vida.</p>
          </section>
          <section className="video">
            <video controls>
              <source src="/assets/GisseleFala.mp4" type="video/mp4"></source>
            </video>
          </section>
        </section>
      </article>

      <section id="eventos">
        <h2>Eventos</h2>
        <nav className="out-lista-eventos">
          <button className="seta seta-esq" onClick={() => slide("left")}>◀</button>

          <ul className="lista-eventos" id="carrossel">
            {eventosData.map((evento, index) => (
              <li className="slide">
                <Link href={"/pages/eventos/" + evento.id}>
                  <section key={evento.id} className="card_evento">
                    <article className="escrita_card_evento">
                      <h3>{evento.titulo}</h3>
                    </article>
                    <section className="img_card_evento">
                      <Image
                      width={1000}
                      height={300}
                      className="img_evento"
                      src={evento.imagem}
                      alt="Imagem do evento"
                      />
                    </section>
                  </section>
                </Link>
              </li>
            ))}
          </ul>

          <button className="seta seta-dir" onClick={() => slide("right")}>▶</button>
        </nav>
      </section>

      <section id="eventos-comentarios">
        <h2>Comentários</h2>
        <section id="flex_comentarios">
          <section className="card_comentarios">
            <section className="img_comentarios">
              <Image width={1000} height={300} src="/assets/mulher.png" alt="Imagem de postagem" />
            </section>
            <section className="escrita_comentarios">
              <p>“Sempre levo minha avó para concertar a bengala em Santa Cruz, eu amo!!”</p>
              <p>Jennifer Silva</p>
            </section>
          </section>

          <section className="card_comentarios">
            <section className="img_comentarios">
              <Image width={1000} height={300} src="/assets/cadeirante.jpg" alt="Imagem de postagem" />
            </section>
            <section className="escrita_comentarios">
              <p>“ATENDIMENTO PADRÃO, gosto muito de arrumar minha cadeira no Tatuapé!”</p>
              <p>Ricardo de Souza</p>
            </section>
          </section>

          <section className="card_comentarios">
            <section className="img_comentarios">
              <Image width={1000} height={300} src="/assets/cego.jpg" alt="Imagem de postagem" />
            </section>
            <section className="escrita_comentarios">
              <p>“Show dms os piá”</p>
              <p>Felipa Santos</p>
            </section>
          </section>
        </section>
      </section>

      <section id="locais">
        <section>
          <h2>Locais</h2>
          <p>
            Unidade Barra Funda<br />
            Estação Palmeiras-Barra Funda<br />
            - Rua Bento Teobaldo Ferraz 119 - Barra Funda/SP<br />
            - (11) 94216-9616
          </p>
          <p>
            Unidade Tatuapé<br />
            Estação Tatuapé<br />
            - Rua Melo Freire, S/N - Tatuapé/SP<br />
            - (11) 91775-3152
          </p>
          <p>
            Unidade Santa Cruz<br />
            Estação Santa Cruz<br />
            - Rua Domingos de Morais, 2494 - Vila Mariana/SP<br />
            - (11) 91126-2881
          </p>
        </section>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1DrhXC5VOuon_v7DUojTja69QQV1GBUs&ehbc=2E312F&noprof=1"
            width="640"
            height="480">
          </iframe>
        </div>
      </section>
    </main>
  );
}