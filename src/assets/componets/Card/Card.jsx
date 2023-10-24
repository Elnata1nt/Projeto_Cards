
import Tag from "../Tag/Tag";
import "./Card.css"

export default function Card(props) {
  const item = props.item;

  const tags = [ //puxando do banco de dados.
    `Status: ${item.status}`,
    `Espécie: ${item.species}`,
    `Origem: ${item.origin.name}`,
    `Genero: ${item.gender}`,
  ]; 

  return <div className="card">
    <h2>{item.name}</h2>

{/* A infrmação que vem para o tag é diretamente do objeto, 
a informaçao que vem deve vir e vem do props.item,localizado na pasta App.jsx -> itens.map -> card item*/}

    <div className="tags"> 
    {tags.map(function (tag, index){
      return <Tag text={tag} key={`card_tag_${index}`} />
    })}
    </div>

    <img src={item.image} />
  </div>
}