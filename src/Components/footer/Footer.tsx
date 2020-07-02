import React from 'react'
import pokeball from '../../assets/pokeball.png';
import pikachu from '../../assets/pikachu.png';
import FooterStyle from '../footer/styles'

const Footer: React.FC = () => {
    let url = "https://github.com/IceHower";
    return(
    <> 
        <FooterStyle>
            <footer>
            <ul>
              <li className="pikachu"><img src={pikachu} alt='pikachu'/></li>
              <li className="copy">Feito por <a href={url} target="_blank">Vinicius Telles</a></li>
              <li className="pokeball"><img src={pokeball} alt='pokeball'/></li>
            </ul>
            </footer>
        </FooterStyle>  
    </>
    );

}

export default Footer;