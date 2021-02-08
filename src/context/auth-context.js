import React, { useContext, useState} from 'react';

const AuthContext = React.createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthContextProvider({children}) {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
