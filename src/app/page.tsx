import { Main } from "@/layouts/main/layout";
import Image from "next/image";
import './page.scss'
import homeImage from '@/../public/home-image.jpg'
import Link from "next/link";
import whatsapp from '@/../public/whatsaap.png'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GavelIcon from '@mui/icons-material/Gavel';
import logo from '@/../public/logo.png'

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
            <GavelIcon sx={{ fontSize: 60 }} />
            <h2>Direito de Sincronização</h2>
            <p>Refere-se ao direito proveniente da combinação de sons e imagens, 
              permitindo que os criadores de músicas recebam uma remuneração específica 
              pela utilização de suas criações.</p>

          </div>
          <div className="container-information">
            <GavelIcon sx={{ fontSize: 60 }} />
            <h2>Direito de Execução Pública</h2>
            <p>Refere-se ao direito derivado da comunicação pública de obras musicais e audiovisuais, 
              sendo sua arrecadação e distribuição realizadas pelo ECAD – Escritório Central de Arrecadação e Distribuição.</p>

          </div>
          <div className="container-information">
            <GavelIcon sx={{ fontSize: 60 }} />
            <h2>Assessoria e Consultoria Jurídica na Área dos Direitos Autorais</h2>
            <p>É uma espécie de direito gerado pela comercialização e disponibilização do acervo  no ambiente virtual,
              em suas mais diversas variações.</p>

          </div>
          <div className="container-information">
            <GavelIcon sx={{ fontSize: 60 }} />
            <h2>Direito Fonomecânico</h2>
            <p>Corresponde ao direito dos compositores pela fixação ou gravação de suas obras em suportes físicos 
              (como CDs, DVDs e Blu-rays) e pela posterior comercialização desses produtos.</p>

          </div>
          <div className="container-information" style={{gridColumn: '1/-1'}}>
            <GavelIcon sx={{ fontSize: 60 }} />
            <h2>Direito Digital</h2>
            <p>Trata-se de um tipo de direito gerado pela comercialização e disponibilização de acervos no ambiente virtual, 
              abrangendo diversas formas de exploração.
              </p>

          </div>
        </div>
      </section>
      <section className="sobre-mim" id="sobre-mim">
        <h1>Sobre-mim</h1>
        <div className="sobre-mim-informations">
          <Image className="profissional-image" src={logo} alt="" width={300} height={300}></Image>
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
            <li>Formação direito em 1995 Faculdade de Direito São Bernardo do Campo </li>
            <li>Especialização direito autoral FGV</li>
            <li>Curso básico direito autoral marcas e patentes OMPI ( Organização Mundial de Propriedade Intelectual)</li>
            <li>Especialização avançado de direito autoral OMPI</li>
            <li>Especialização avançado de marcas OMPI</li>
            <li>Por graduação direito autoral OMPI</li>
          </ul>
        </div>
      </section>
      <section className="projetos-artigos" id="projetos-artigos">
        <h1>Projetos & Artigos</h1>
      </section>
    </Main>
  )
}
