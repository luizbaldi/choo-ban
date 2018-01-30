const itemComments = (state, emitter) => {
    state.itemComments = [];
    emitter.on('DOMContentLoaded', () => {
        emitter.on('itemComment:add', (boardId, itemId, comment) => {
            const newItemComment = {
                id: Date.now(),
                boardId,
                itemId,
                comment
            }
            state.itemComments.push(newItemComment);
            emitter.emit(state.events.RENDER);
        })
    });
}

export default itemComments;
