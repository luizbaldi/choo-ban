import storage from '../util/storage';

const itemComments = (state, emitter) => {
    state.itemComments = storage.get('itemComments')

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
        });
        emitter.on('itemComment:move', (itemId, oldBoard, newBoard) => {
            state.itemComments.forEach(element => {
                if(element.boardId === oldBoard && element.itemId === itemId) {
                    element.boardId = newBoard;
                }
            });
            emitter.emit(state.events.RENDER);            
        });
    });
}

export default itemComments;
