const boards = (state, emitter) => {
  state.boards = [];

  emitter.on('DOMContentLoaded', () => {
    emitter.on('boards:add', title => {
      const newBoard = { id: Date.now(), title };
      state.boards.push(newBoard);
      emitter.emit(state.events.RENDER);
    })
  })
}

export default boards;