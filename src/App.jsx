import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './assets/componets/Card/Card'


function App() {
// const item1 = {
//       nome:  'Rick Sanchez',
//       imagemUrl:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//       tags: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137']
//      }  
// const item2 = {
//       nome:  'Morty Smith',
//       imagemUrl:'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//       tags: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137']
//      }  
// const item3 = {
//       nome:  'Summer Smith',
//       imagemUrl:'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//       tags: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137']
//      }
//      const item4 = {
//       nome:  'Summer Smith',
//       imagemUrl:'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//       tags: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137']
//      }   
     
//      const itens = [item1, item2, item3, item4]

//------------------------------------------------------------------------------------TODO; implementação da lista de item---------------------------------------------------------------------------------------

const [itens, setItens] = useState([]) 
/* --> O conchete representa a descontruçao de array.
pois quando utilizamos estado, precisamos declarar as variaveis dentro de cochetes. */
// --> set é para definir o estado, sendo o itens o estado, o uso do setItens é a definiçao do estado.

// useState de react tras duas coisas
// 1. O estado contendo o valor
// 2. A função que atualiza o valor do estado
//    Quando executado, a função tambem re-renderiza o componente automaticamente.

   async function carregarDadosApi() {


    const response = await fetch("https://rickandmortyapi.com/api/character").catch(function (error){
    console.log("servidor explodiu")
    alert("deu ruim")
    setError("deu ruim")
   })
    //sistema assincrono, onde roda de forma paralela (await)
    const json= await response.json()                                                

    const results = json.results

    setItens(results)
   }

   //useEffect recebe duas infomações:
   // 1.  função contendo o codigo que sera protegido pelo useeffect
   // 2.  lista de dependencias que controla a execuçao do useEffect. 
   //     array vazio para executar apenas 1 vez

   useEffect(
    function () {
       carregarDadosApi();
   },
    []) 


   //--------------------------------------------------------------------------------execuçao da funçao de elementos da lista------------------------------------------------------------------------------------

     return (
    <> {/*O map executa a função uma vez para cada elemento dentro da lista. O resultado dessa fuçaão será o nome elemento da lista */}

       {itens.map(function (item, index) {
         return <Card item={item} key={`card_${index}`} /> 
       })}
       {/* key={`card_${index}`} resolvendo o warningnde 'nique key' no  map */}
    </>
  )
}

export default App
