import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return produce(state, draf => {
        const productIndex = draf.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          draf[productIndex].amount += 1;
        } else {
          draf.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draf => {
        const productIndex = draf.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draf.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }
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
