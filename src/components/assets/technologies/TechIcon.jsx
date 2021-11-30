import styled from 'styled-components';
import 'balloon-css';


const TechIconStyles = styled.div`
    cursor: default !important;
`

const TechIcon = ({ alt, src, size }) => {
    return(
        <TechIconStyles
            aria-label={alt}
            data-balloon-pos="up"
        >
            <img 
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