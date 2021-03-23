import React from 'react'

const PageStateContext = React.createContext()
const PageDispatchContext = React.createContext()

function PageReducer(state, action) {

    switch (action.type) {
        case 'UpdatePage':
            return {
                Page: action.payload
            }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function PageProvider({ children }) {
    const [state, dispatch] = React.useReducer(PageReducer, { Page: 'page' })
    return (
        <PageStateContext.Provider value={state}>
            <PageDispatchContext.Provider value={dispatch}>
                {children}
            </PageDispatchContext.Provider>
        </PageStateContext.Provider>
    )
}

function UsePageState() {
    const context = React.useContext(PageStateContext)
    if (context === undefined) {
        throw new Error('UsePageState must be used within a PageProvider')
    }
    return context
}

function UsePageDispatch() {
    const context = React.useContext(PageDispatchContext)
    if (context === undefined) {
        throw new Error('UsePageDispatch must be used within a PageProvider')
    }
    return context
}

export { PageProvider, UsePageState, UsePageDispatch }
