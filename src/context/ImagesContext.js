import { createContext, useReducer } from 'react'

export const ImagesContext = createContext()

const imagesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return {
        ...state,
        images: action.payload,
      }

    default:
      return state
  }
}

export const ImagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(imagesReducer, {
    images: [],
  })

  return (
    <ImagesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ImagesContext.Provider>
  )
}
