import storage from '../util/storage'

const stores = [
  'boards',
  'boardItems',
  'itemComments'
]

const boardItems = (state, emitter) => {
  emitter.on('DOMContentLoaded', () => {
    emitter.on('render', () => {
      stores.forEach(store => storage.set(store, state[store]))
    })
  })
}

export default boardItems
