const boards = (state, emitter) => {
  state.boards = [];

  emitter.on('DOMContentLoaded', () => {
    emitter.on('boards:add', name => {
      const newBoard = { id: Date.now(), name };
      state.boards.push(newBoard);
      emitter.emit(state.events.RENDER);
    })
  })
}

export default boards;