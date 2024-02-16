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

    // 6 - loading
    const [loading,setLoading] = useState(false)

    //  7 - tratando erros
    const [error, setError] = useState(null)

    // Challenge 6
    const [itemId, setItemId] = useState(null)

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
        }else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
            })
            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() => {

        const fetchData = async () =>{
            //  6 - loading
            // A função é chamada e loading é setado como true, para começar a tela de carregamento...
            setLoading(true)

            //  7 - tratando erros
            try {
                const res = await fetch(url)

                const response = await res.json()
    
                setData(response)
            } catch (error) {
                console.log(error.message)

                setError("Houve algum erro ao carregar os dados!")
            }

            // Após o recebimento  dos dados, setamos novamente loading como false...
            setLoading(false)
        }
        // Aqui chamamos a função para faze-lá ser executada...
        fetchData()

        
    // sempre que adicionarmos algo no sistema, ele acionara o callFetch...
    },[url, callFetch])

    useEffect(() => {

       const httpRequest = async () => {
        let response;
        
        if(method === "POST"){
            
            let fetchOptions = [url, config]

            const res = await fetch(...fetchOptions)

             response = await res.json();

            
        } else if(method === "DELETE"){
            const deleteUrl = `${url}/${itemId}`

            const res = await fetch(deleteUrl, config)

             response = await res.json()

        }

        setCallFetch(response)
       }
       httpRequest();
    //    dados que estamos mapeando e que precisam estar na dependencia 
    },[config, method, url])





// Para exportar o hook, vamos usar...
    return { data, httpConfig, loading, error };
}