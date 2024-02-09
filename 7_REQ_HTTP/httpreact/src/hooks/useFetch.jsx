import {useState, useEffect} from 'react';

//  4 - custom hook

export const useFetch = (url) => {
    // setamos o useState com o valor null, pois não sabemos se vamos receber um array, objeto ou outro valor
    const [data, setData] = useState(null)

    //  5 - refatorando post
    // config vai configurar o method, headers e body
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    // sempre que adicionarmos algo no sistema, ele acionara o callFetch...
    const [callFetch, setCallFetch] = useState(false)

    const httpConfig = (data,method) => {
        if(method === "POST" ){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data), 
            
            })
            setMethod(method)
        }
    }

    useEffect(() => {

        const fetchData = async () =>{
            const res = await fetch(url)

            const response = await res.json()

            setData(response)
        }
        // Aqui chamamos a função para faze-lá ser executada...
        fetchData()

        
    // sempre que adicionarmos algo no sistema, ele acionara o callFetch...
    },[url, callFetch])

    useEffect(() => {

       const httpRequest = async () => {
        if(method === "POST"){
            
            let fetchOptions = [url, config]

            const res = await fetch(...fetchOptions)

            const response = await res.json();

            setCallFetch(response)
        }
       }
       httpRequest();
    //    dados que estamos mapeando e que precisam estar na dependencia 
    },[config, method, url])





// Para exportar o hook, vamos usar...
    return { data, httpConfig };
}