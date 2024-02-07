import './MyForm.css'
import {useState} from 'react';
const MyForm = () => {
    // 3 - Gerenciamento de Dados

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [bio,setBio] = useState("")
    const [role,setRole] = useState("")

    const handleName = (event) => {
        setName(event.target.value);
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,bio,role);

        // Validação
        // Envio

        // 7 - Limpar formulário
        setName("");
        setEmail("");
        setBio("");
    }
    
    return (
        <div>
            {/*  5 - envio de form */}
            {/*  1 - criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName}/>
                    
                </div>
                {/*  2- label envolvendo input */}
                <label>
                    <span>Email</span>
                    {/* Simplificação de manipulação de state */}
                    <input type="email" name="email" placeholder='Digite email' onChange={(e)=> (setEmail(e.target.value))}/>
                    
                </label>
                    {/* 8 - Bio */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Digite sua biografia' onChange={(e) => setBio(e.target.value)}></textarea>
                </label>
                    {/* 9 - Select */}
                
                <label >
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm