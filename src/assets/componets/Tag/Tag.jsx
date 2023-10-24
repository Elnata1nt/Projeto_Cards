import { unmountComponentAtNode } from 'react-dom'
import './Tag.css'

export default function Tag(props) /*props objeto vazio*/ {
    // conteudo do componente.

    const text = props.text;

    /*
     return --> encerra a função no Reactjs,
     o return precisa devolver um componente JSX pra ser exibido na tela.
    */
   return <div className="tag">{text}</div>
}