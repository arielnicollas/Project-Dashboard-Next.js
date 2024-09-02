export default function Formulario() {

async function HandleChangeData(form: FormData) {
    'use server'
    
    const valor = form.get('valor')

    console.log(valor)
}

    return(
      <>
       <form action={HandleChangeData} method="GET">
        <input type="text" name= "valor" placeholder="Digite seu Nome"/>
            <br/>
            <br/>
         <button type="submit">Enviar</button>
       </form>
      </>
    )
}