import Form from "../ui/invoices/create-form"


export default async function Pokes() {

async function getNamePoke(form: FormData) {
        'use server'

    const valor = await form.get("namepoke")

    return valor
}


async function searchPoke(dataPoke: any){
        'use server'

        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${dataPoke}`)
        let pokeName = await data.json()
        return console.log(pokeName)
}


// let dateResult = getNamePoke.name
// console.log(dateResult)



// function getInfos() {
  
// }


// getInfos()



    return (

        <>


       



            {/* <ul>
                <li key={ListPokes.id}> {ListPokes.name}</li>
                <li key={ListPokes.id}> {ListPokes.ability}</li>
            </ul> */}


            <form action={getNamePoke} method="GET">
                <input type="text" name= "namepoke" placeholder="Digite o nome do Pokemon! :D"/>
                <button type="submit">Buscar</button>
            </form>
        </>
    )
}