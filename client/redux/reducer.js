import clone from 'clone'
import projects from '../data/projects'

const INITIAL_STATE = {
  singleProject: {
    show: false,
    id: ''
  }, 
  projects
}

export default function reducer (state = INITIAL_STATE, action) {
  let newState = clone(state)

  switch(action.type) {
    case 'SHOW_PROJECT' :
      newState.singleProject.show = true
      newState.singleProject.id = action.id
      break

    case 'CLOSE_PROJECT' :
      newState.singleProject.show = false
      newState.singleProject.id = ''
  }

  return newState
}