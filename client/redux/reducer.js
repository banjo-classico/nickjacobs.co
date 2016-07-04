import clone from 'clone'
import projects from '../data/projects'

const INITIAL_STATE = {
  displayPage: 'home',
  projects
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