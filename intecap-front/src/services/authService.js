import axios from "axios"


export const loginService = async (email, password) => {
    // llamada a la API para iniciar sesión con AXIOS con un env para la url
    try {
        const response = await axios.post(`localhost:4000/login`, {
            email,
            password
        });

        if (response.status === 200) {
            console.log("Login exitoso:", response.data);
            return response.data;
        } else {
            console.error("Error al iniciar sesión:", response.statusText);
            // throw new Error("Error al iniciar sesión");
            return null;
        }
    } catch (error) {
        return null;
        
    }

}

