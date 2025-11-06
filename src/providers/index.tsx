import React from 'react'
import QueryProvider from './query.provider'
import ContextProviders from './context.provider'



const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryProvider >
            <ContextProviders>
                {children}
            </ContextProviders>
        </QueryProvider>
    )
}

export default Providers