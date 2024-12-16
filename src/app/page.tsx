import { Main } from "@/layouts/main/layout";
import Image from "next/image";
import './page.scss'
import homeImage from '@/../public/home-image.jpg'
import Link from "next/link";
import whatsapp from '@/../public/whatsaap.png'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GavelIcon from '@mui/icons-material/Gavel';
import logo from '@/../public/logo.png'
import profissionalFoto from '@/../public/ana-claudia.jpeg'
import xang from '@/../public/xang.jpeg'
import ez from '@/../public/mcez.jpeg'
import melody from '@/../public/mcmelody.jpeg'
import bellaangel from '@/../public/bellaangel.jpeg'
import alexandrepires from '@/../public/alexandrepires.jpeg'
import valter from '@/../public/valter.jpeg'
import lulu from '@/../public/lulusantos.jpeg'
import mcjoao from '@/../public/mcjoao.jpeg'
import rafaelbittencourt from '@/../public/rafaelbittencourt.jpeg'
import djlucasbeat from '@/../public/djlucasbeat.jpeg'
import mcleozinho from '@/../public/mcleozinho (1).jpeg'
import andrelemos from '@/../public/andrelemos.jpeg'
import Button from "@/components/button/component";

export default function Home() {

  return (

    <Main>
      <h2>Hello World</h2>
      <section className="home">
        <div className="home-informations">
          <h1>Protegendo sua criatividade com excelência e seriedade</h1>
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
          <div className="container-information" style={{ gridColumn: '1/-1' }}>
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
          <Image className="profissional-image" src={profissionalFoto} alt="" ></Image>
          <div className="sobre-mim-text">
            <p>Me formei em 1995 queria ser promotora pública.
              Mas fui fazer estágio com meu pai na produtora e logo me via na área autoral de música.
              Comecei arrumando os direitos do meu avô Mário Zan e vendo os contratos dele.
              E daí segui adiante na área autoral que adoro.
              Analisando contratos. Editoras e diante do crescimento digital desenvolvendo assim esse recolhimento tão importante aos compositores
              Clientes fixo MC Xang único autor de oh nanana mais de um milhão em autoral . MC EZ autor de olha a explosão , todas as músicas da primeira temporada da série da Netflix "sintonia " e muitos sucessos autorais.
              Mídia hits DJ Lucas Beat
              Melody, Bella Angel dispensam qualquer apresentação
              Geno da dupla Gino e Geno
              Teodoro de Teodoro e Sampaio
              Andre Lemos um dos principais compositores de pagode tendo obras gravadas por todos como Alexandre Pires até Lulu Santos
              Valter Garrincha um dos fundadores do Ilê da Bahia e principal compositor do Axe suas músicas gravadas por Xuxa e inclusive abertura do Criança Esperança, compositor de O Barquinho com muitas regravações.
              MC João compositor e intérprete de " Baile de Favela".
              Entre muitos tantos DJ Yuri Martins várias composições com Anita.
              Assim direito autoral é sério pois não é só sobrevivência de artistas mas o legado deixado e a herança a seus familiares.</p>
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
      <section className="clientes" id="clientes">
        <h1>Clientes</h1>
        <div className="clientes-container">
          <div className="cliente">
            <Image src={xang} alt="foto" className="cliente-foto" />
            <h2>MC Xang</h2>
          </div>
          <div className="cliente">
            <Image src={ez} alt="foto" className="cliente-foto" />
            <h2>MC EZ</h2>
          </div>
          <div className="cliente">
            <Image src={melody} alt="foto" className="cliente-foto" />
            <h2>MC Melody</h2>
          </div>
          <div className="cliente">
            <Image src={bellaangel} alt="foto" className="cliente-foto" />
            <h2>Bella Angel</h2>
          </div>
          <div className="cliente">
            <Image src={mcjoao} alt="foto" className="cliente-foto" />
            <h2>MC João</h2>
          </div>
          <div className="cliente">
            <Image src={lulu} alt="foto" className="cliente-foto" />
            <h2>Lulu Santos</h2>
          </div>
          <div className="cliente">
            <Image src={valter} alt="foto" className="cliente-foto" />
            <h2>Valter Garrincha</h2>
          </div>
          <div className="cliente">
            <Image src={djlucasbeat} alt="foto" className="cliente-foto" />
            <h2>DJ Lucas Beat</h2>
          </div>
          <div className="cliente">
            <Image src={mcleozinho} alt="foto" className="cliente-foto" />
            <h2>MC Leozinho ZS</h2>
          </div>
          <div className="cliente">
            <Image src={rafaelbittencourt} alt="foto" className="cliente-foto" />
            <h2>Rafael Bittencourt</h2>
          </div>
          <div className="cliente">
            <Image src={andrelemos} alt="foto" className="cliente-foto" />
            <h2>Andre Lemos</h2>
          </div>

        </div>
      </section>

      <section className="artigos" id="artigos">
        <h1>Ultimos Artigos</h1>
        <div className="artigos-container">
        <div className="button-artigos" style={{ gridColumn: '1/-1' }}>
            <Link href="https://anaclaudiazandomenighi.jusbrasil.com.br/">
            <Button ButtonName="Ver Mais Artigos" type="button" variant="primary"  /></Link>
          </div>
          <div className="artigo">
            <h2>Como saber se estou recebendo meus direitos autorais.</h2>
            <p>Como saber se estou recebendo corretamente meus direitos autorais? No ramo autoral principalmente com esse advento digital, 
              o advento das inteligências artificiais, cada vez tem ficado mais...</p>
            
            <Link href="https://www.jusbrasil.com.br/artigos/como-saber-se-estou-recebendo-meus-direitos-autorais/2814356447?_gl=1*1m2ds1k*_gcl_au*ODI0MTgxMjM0LjE3MzQzNTU5MjU.*_ga*NzQyMTQ0MDM2LjE3MzQzNTU5MjU.*_ga_QCSXBQ8XPZ*MTczNDM3MzM1Ni4yLjEuMTczNDM3NDc0Ni42MC4wLjA.">
            <Button ButtonName="Saiba Mais" type="button" variant="primary"  /></Link>
          </div>
          <div className="artigo">
            <h2>IA e Musica</h2>
            <p>Direito autoral , inteligências artificias, o que pode ser feito? Hoje as inteligências artificiais na luta com os criadores não criadores 
              de conteúdo criadores artistas, as inteligências artificiais...</p>
            
            <Link href="https://www.jusbrasil.com.br/artigos/ia-e-musica/2802746084?_gl=1*1t9ak6f*_gcl_au*ODI0MTgxMjM0LjE3MzQzNTU5MjU.*_ga*NzQyMTQ0MDM2LjE3MzQzNTU5MjU.*_ga_QCSXBQ8XPZ*MTczNDM3MzM1Ni4yLjEuMTczNDM3NjIwMy4yLjAuMA..">
            <Button ButtonName="Saiba Mais" type="button" variant="primary"  /></Link>
          </div>
         
          <div className="artigo">
            <h2>Regulamentação para uso de IA na música sem prejudicar compositores.</h2>
            <p>Em carta aberta artistas do mundo todo se uniram para pedir proteção contra o uso indiscriminado de IA na música e vindo assim a 
              prejudicar compositores os artistas com a imitação de suas criações e...</p>
              <Link href="https://www.jusbrasil.com.br/artigos/regulamentacao-para-uso-de-ia-na-musica-sem-prejudicar-compositores/2335846294?_gl=1*1i1x7zf*_gcl_au*ODI0MTgxMjM0LjE3MzQzNTU5MjU.*_ga*NzQyMTQ0MDM2LjE3MzQzNTU5MjU.*_ga_QCSXBQ8XPZ*MTczNDM3MzM1Ni4yLjEuMTczNDM3NjIxNi41Mi4wLjA.">
              <Button ButtonName="Saiba Mais" type="button" variant="primary"  /></Link>
          </div>
          <div className="artigo">
            <h2> Como afeta o direito autoral a compra de "players".</h2>
            <p>Veja são inúmeras as promessas encontradas de engajamento, de que seus players irão aumentar, sua visibilidade enfim.. 
              Artistas do mundo todo começaram a receber as cartinhas do spotify que...</p>
              <Link href="https://www.jusbrasil.com.br/artigos/como-afeta-o-direito-autoral-a-compra-de-players/2239426322?_gl=1*f101za*_gcl_au*ODI0MTgxMjM0LjE3MzQzNTU5MjU.*_ga*NzQyMTQ0MDM2LjE3MzQzNTU5MjU.*_ga_QCSXBQ8XPZ*MTczNDM3MzM1Ni4yLjEuMTczNDM3NjUwOC42MC4wLjA.">
              <Button ButtonName="Saiba Mais" type="button" variant="primary"  /></Link>
          </div>
          <div className="artigo">
            <h2>Importância das parcerias em obras e dos direitos autorais.</h2>
            <p>O mercado cada vez inovando mais e as parcerias, hoje chamadas de feats tem sido de grande importância especialmente na era digital. Lembramos que, uma música em parceria irá aparecer na página de...</p>
            <Link href="https://www.jusbrasil.com.br/artigos/importancia-das-parcerias-em-obras-e-dos-direitos-autorais/2183880038?_gl=1*1gbgzko*_gcl_au*ODI0MTgxMjM0LjE3MzQzNTU5MjU.*_ga*NzQyMTQ0MDM2LjE3MzQzNTU5MjU.*_ga_QCSXBQ8XPZ*MTczNDM3MzM1Ni4yLjEuMTczNDM3NjUxNi41Mi4wLjA.">
            <Button ButtonName="Saiba Mais" type="button" variant="primary"  /></Link>
          </div>
          <div className="artigo">
            <h2>O que diz a Lei Brasileira sobre o domínio público do Mickey Mouse.</h2>
            <p>Claro que foi a notícia do ano. Por se tratar de notória figura se tornou assim mais importante ainda, já que transcorreram os 95 anos da publicação do curta metragem de estreia do Mickey Mouse,...</p>
            <Link href="https://www.jusbrasil.com.br/artigos/o-que-diz-a-lei-brasileira-sobre-o-dominio-publico-do-mickey-mouse/2178803742?_gl=1*1hzjbtg*_gcl_au*ODI0MTgxMjM0LjE3MzQzNTU5MjU.*_ga*NzQyMTQ0MDM2LjE3MzQzNTU5MjU.*_ga_QCSXBQ8XPZ*MTczNDM3MzM1Ni4yLjEuMTczNDM3NjU0My4yNS4wLjA.">
            <Button ButtonName="Saiba Mais" type="button" variant="primary"  /></Link>
          </div>


        
        </div>
      </section>
    </Main>
  )
}
