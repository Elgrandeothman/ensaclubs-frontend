import { createContext, useReducer, useContext } from 'react'

export const ClubsContext = createContext()

export const clubsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLUBS':
            return {
                clubs: action.payload
            }
        case 'CREATE_CLUB':
            return {
                clubs: [action.payload, ...state.clubs]
            }
        case 'DELETE_CLUB':
            return {
                clubs: state.clubs.filter(club => club.id !== action.payload.id)
            }
        case "UPDATE_CLUB":
            return {
                clubs: state.clubs.map(club => club.id === action.payload.id ? action.payload : club)
            };
        default:
            return state
    }
}

export const ClubsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(clubsReducer, {
        clubs: []
    })

    return (
        <ClubsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ClubsContext.Provider>
    )
}


export const useClubsContext = () => {
    const context = useContext(ClubsContext)

    if (!context) {
        throw Error('useClubContext must be used inside an ClubsContextProvider')
    }

    return context
}