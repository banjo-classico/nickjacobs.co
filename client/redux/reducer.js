import clone from 'clone'

const INITIAL_STATE = {
  displayPage: 'home'
}

export default function reducer (state = INITIAL_STATE, action) {
  let newState = clone(state)

  switch(action.type) {
    case 'SET_DISPLAY_PAGE' :
      newState.displayPage = action.page
      break
  }

  return newState
}