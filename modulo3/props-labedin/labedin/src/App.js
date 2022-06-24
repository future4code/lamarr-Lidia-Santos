import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagemLidia from './imagem/lidia.png';
import imagemSemas from './imagem/semas.jpg';
import imagemCsp from './imagem/csp.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import imagemEmail from './imagem/email.png';
import imagemPin from './imagem/pin.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {imagemLidia}
          nome="Lídia Lee Abreu" 
          descricao="Oi, eu sou Lidia. Sou aluna da Labenu, do curso de programação web. Sou natural de Belém PA, mas hoje em dia moro em São Paulo SP."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      <div className='page-section-container'>
        <h3>Contatos</h3>
        <CardPequeno
        imagem={imagemEmail}
        nome="Email"
        descricao="lidialee.abreu@gmail.com"
        />

        <CardPequeno
        imagem={imagemPin}
        nome="Endereço"
        descricao="Rua Antônio Viana. -Parque Paulistano-SP"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={imagemSemas} 
          nome="Secretaria de Meio Ambiente e Sustentabilidade" 
          descricao="Setor de monitoramento de mudanças climáticas." 
        />
        
        <CardGrande 
          imagem={imagemCsp}
          nome="Colégio São Paulo" 
          descricao="Apoio pedagógico." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
