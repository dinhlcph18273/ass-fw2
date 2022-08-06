import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
    image: any,
    title1: string,
    title2: string,
    link: string
}

const ServiceBtn = ({ image, title1, title2, link }: Props) => {
    return (
        <Container>
            <Link to={link}><Image style={{color: "white"}} src={image} /></Link>
            <Content>
                <Title>{title1}</Title>
                <Title>{title2}</Title>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: transparent;
    width: 100px ;
    margin-right:5px ;
    
`
const Image = styled.img`
    margin-right: 5px;
`
const Content = styled.div`
    
`
const Title = styled.div`
    color: white;
    font-size: 12px;
`

export default ServiceBtn