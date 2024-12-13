import { Main } from "@/layouts/main/layout";
import Image from "next/image";
import './page.scss'
import homeImage from '@/../public/home-image.jpg'
import Link from "next/link";
import whatsapp from '@/../public/whatsaap.png'

export default function Home() {

  return (

    <Main>
      <h2>Hello World</h2>
      <section className="home">
        <div className="home-informations">
          <h1>Protegendo sua criatividade com excelência jurídica</h1>
          <div className="home-buttons">
            <Link href="https://wa.me/5511940247571"><Image src={whatsapp} alt="whatsapp" className="social-image" /></Link>
          </div>
        </div>
      </section>
      <section className="area-de-atuacao" id="area-de-atuacao">
        <h1>Area de Atuação</h1>
        <div className="area-atuacao-informations">
          <div className="container-information">
            <h2>Direito Digital</h2>
            <p>É uma espécie de direito gerado pela comercialização e disponibilização do acervo  no ambiente virtual,
              em suas mais diversas variações.</p>

          </div>
          <div className="container-information">
            <h2>Direito Digital</h2>
            <p>É uma espécie de direito gerado pela comercialização e disponibilização do acervo  no ambiente virtual,
              em suas mais diversas variações.</p>

          </div>
          <div className="container-information">
            <h2>Direito Digital</h2>
            <p>É uma espécie de direito gerado pela comercialização e disponibilização do acervo  no ambiente virtual,
              em suas mais diversas variações.</p>

          </div>
          <div className="container-information">
            <h2>Direito Digital</h2>
            <p>É uma espécie de direito gerado pela comercialização e disponibilização do acervo  no ambiente virtual,
              em suas mais diversas variações.</p>

          </div>
          <div className="container-information">
            <h2>Direito Digital</h2>
            <p>É uma espécie de direito gerado pela comercialização e disponibilização do acervo  no ambiente virtual,
              em suas mais diversas variações.</p>

          </div>
          <div className="container-information">
            <h2>Direito Digital</h2>
            <p>É uma espécie de direito gerado pela comercialização e disponibilização do acervo  no ambiente virtual,
              em suas mais diversas variações.</p>

          </div>
        </div>
      </section>
      <section className="sobre-mim" id="sobre-mim">
        <h1>Sobre-mim</h1>
        <div className="sobre-mim-informations">
          <Image className="profissional-image" src="" alt="" width={300} height={300}></Image>
          <div className="sobre-mim-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi itaque cupiditate tempore.
              Esse, quo enim unde ipsa quidem officiis, quibusdam a placeat similique laborum necessitatibus
              odio ad pariatur cupiditate reprehenderit.</p>
              <small className="assinatura"> - Doutora Ana Claudia</small>
          </div>

        </div>
        <div className="sobre-mim-formacao-academia">
          <h1>Formação Academica</h1>
          <ul className="formacoes">
            <li>Graduação em Direito</li>
            <li>Graduação em Ciências Contábeis</li>
            <li>Graduação em Administração</li>
            <li>Ingles Avançado</li>
          </ul>
        </div>
      </section>
      <section className="projetos-artigos" id="projetos-artigos">
        <h1>Projetos & Artigos</h1>
      </section>
    </Main>
  )
}
