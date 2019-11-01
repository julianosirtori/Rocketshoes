import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
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
    default:
      return state;
  }
}
