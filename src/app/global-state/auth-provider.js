'use client';
import React, { useMemo } from "react"

const AuthContext = React.createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
})

export default function AuthProvider({isAuthenticated, setIsAuthenticated, children}) {
    const authValue = useMemo(() => ({
        isAuthenticated,
        setIsAuthenticated,
    }), [isAuthenticated])

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return React.useContext(AuthContext);
}