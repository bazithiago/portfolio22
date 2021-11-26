import styled from 'styled-components';
import Image from 'next/image';
import 'balloon-css';


const TechIconStyles = styled.div`
    margin-right: 20px;
    cursor: default !important;
`

const TechIcon = ({ alt, src, size }) => {
    return(
        <TechIconStyles
            aria-label={alt}
            data-balloon-pos="up"
        >
            <Image 
                alt={alt}
                src={src}
                width={size}
                height={size}
                data-tooltip={alt}
            />        
        </TechIconStyles>
    )
}

export default TechIcon;