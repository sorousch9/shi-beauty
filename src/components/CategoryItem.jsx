import styled from "styled-components";



const Container = styled.div`
flex: 1;
margin: 5px;
height: 70vh;
position: relative;`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const Title = styled.h1`
color: white;
margin-bottom:20px;
text-shadow: 3px 3px 4px #666;
background-color: rgba(65, 65, 65, 0.280);
padding: 5px 10px;
border-radius: 5px;

`
const Button = styled.button`
border:none;
padding:10px 20px; 
background-color: white;   
color: gray;
cursor: pointer;
font-weight: 600;
font-size:15px;
`


export const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Jetzt entdecken </Button>
        </Info>
    </Container>
  )
}
