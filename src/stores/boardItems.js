const boardItems = (state, emitter) => {
  state.boardItems = [];

  emitter.on('DOMContentLoaded', () => {
    emitter.on('boardItem:add', (item, boardId) => {
      const { title, subtitle } = item;
      const newBoardItem = { 
        id: Date.now(),
        boardId,
        title,
        subtitle
      };
      state.boardItems.push(newBoardItem);
      emitter.emit(state.events.RENDER);
    });

    emitter.on('boardItem:remove', itemId => {
      const itemToRemoveIdx = state.boardItems.findIndex(item => item.id === itemId);
      state.boardItems.splice(itemToRemoveIdx, 1);
      emitter.emit(state.events.RENDER);
    });
  });
};

export default boardItems;