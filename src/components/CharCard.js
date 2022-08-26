import { Link, useParams } from "react-router-dom"
import Card, { InnerCardGrid, TopSection } from './styles/Cards.style'
import Button  from "./styles/Buttons.style"
import quill from '../images/quill.png'
import trashcan from '../images/trashcan.png'


export default function CharCard({ character, handleDelete }) {
    const params=useParams()

    const deleteCharacter = () => {
        fetch(`http://localhost:9292/${params.username}/${character.id}`, {method: "DELETE"})
        .then(()=>handleDelete(character.id))
    }

    return (
        <Card>
            <InnerCardGrid>
                <TopSection as={Link} key={character.id} to={`/${params.username}/${character.id}`}>
                    <img src={character.image} alt='Character avatar'/><br/>
                    <h2>{character.name}</h2>
                </TopSection>            
                <div className="bottom">
                    <Button as={Link} to={`/${params.username}/${character.id}/edit`}>
                        <img src={quill} alt='edit button'/>
                        <p>Edit</p>    
                    </Button>                    
                    <Button as='div' onClick={deleteCharacter}>
                        <img src={trashcan} alt='delete button'/>
                        <p>Delete</p>
                    </Button>
                </div>
            </InnerCardGrid>
        </Card>
    )
}