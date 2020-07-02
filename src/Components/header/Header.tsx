import React from 'react'
import headerBG from '../../assets/headerbackground.png';
import HeaderStyle from './styles'

const Header: React.FC = () => {
    return(
    <div className="pokeheader">
        <HeaderStyle>
            <img src={headerBG} alt='Pokemon'/>
        </HeaderStyle>
        
    </div>
    );

}

export default Header;

