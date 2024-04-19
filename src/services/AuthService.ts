import { AuthUser } from "../interfaces/UsersInterface";

const BACKEND_URL = "http://localhost:3000";

const authService = {
    async loginUser(user: AuthUser) {
        const loggedInUser = await fetch(BACKEND_URL + "/users/login", {             
            method: 'POST', 
            body: JSON.stringify(user), 
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await loggedInUser.json();
        return result;
    }
}

export default authService;