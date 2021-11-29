import styled from 'styled-components';

const ButtonStyles = styled.a`
    min-width: 145px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--primary);
    color: var(--primary);
    background-color: var(--secondary);
    font-size: 0.8rem;

    &:hover {
        color: var(--secondary);
        background-color: var(--primary);
        transition: all 0.3s ease-in-out;
    }

    & > p {
        margin-left: 10px;
    }
`

const Button = ({ children, href, target, name, src }) => {
    return(
        <ButtonStyles href={href} target={target}>
            <img alt={name} src={src} width={24}/>
            <p>{name}</p>
            {children}
        </ButtonStyles>
    )
}

export default Button;