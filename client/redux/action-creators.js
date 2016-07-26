export function showProject(id) {
  return {
    type: 'SHOW_PROJECT',
    id
  }
}

export function closeProject() {
  return {
    type: 'CLOSE_PROJECT'
  }
}