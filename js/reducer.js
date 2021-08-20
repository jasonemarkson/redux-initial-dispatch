let state

// reducer -- function to change the state of variable
function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

  // dispatch -- function to reflect the updated state and render it to the DOM
function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch({type: '@@INIT'})
