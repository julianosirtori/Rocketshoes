import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return produce(state, draf => {
        const { product } = action;
        draf.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draf => {
        const productIndex = draf.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draf.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCESS': {
      return produce(state, draf => {
        const productIndex = draf.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draf[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
