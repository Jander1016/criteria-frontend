const BACKEND_URL = mport.meta.env.VITE_BACKEND_URL

const authService = {
    async loginUser(user) {
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