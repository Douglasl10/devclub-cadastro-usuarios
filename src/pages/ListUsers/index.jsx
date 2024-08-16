import { useEffect } from "react-router-dom"
import api from "../../services/api"
import  Button  from "../../components/Button"
import TopBackground from "../../components/TopBackground"




function ListUsers() {

    useEffect(() => {
        
        async function getUsers(){

            const userFromApi = await api.get('/usuarios')  

        }
      
        getUsers()

    }, [])


    return (
        <div>
            <TopBackground/>

            <h1>LIstagem de Usuarios</h1>
            <Button>Ok OK</Button>
        </div>
    )

}

export default ListUsers