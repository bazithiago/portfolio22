import styled from 'styled-components';
import TechIcon from './TechIcon';

const TechGroupStyles = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    align-items: center;

    & > div { // icons row
        display: flex;
        flex-direction: row;
        margin: 10px 0 20px 0;

        & > div + div {
            margin-left: 20px;
        }
    }
`

const TechGroup = ({ data, label }) => {
    return(
        <TechGroupStyles>
            {label || 'build with' }
            <div>
                {data.map( tech => {
                    return(
                        <TechIcon 
                            key={tech.name}
                            alt={tech.name}
                            src={tech.src}
                            size={32}
                        />
                    )
                })}
            </div>
        </TechGroupStyles>
    )
}

export default TechGroup;