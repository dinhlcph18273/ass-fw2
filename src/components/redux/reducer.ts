const initialValue: any = {
  products: [],
  cart: [],
  total: 0,
};

const rootReducer = (state = initialValue, action: any) => {
  switch (action.type) {
    case "cart/add":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "cart/increase":
      const id = action.payload;
      const newCart = state.cart.map((item: any) => {
        if (item.id === id) {
          const amount = item.amount ? item.amount + 1 : 2;
          return {
            ...item,
            amount,
            total: amount * item.saleOffPrice,
          };
        }
      });
      return {
        ...state,
        cart: newCart,
      };
    case "cart/decrease": 
        const id1 = action.payload;
        const newCart1 = state.cart.map((item: any) => {
            if (item.id === id1) {
              const amount = item.amount ? item.amount - 1 : 2;
              return {
                ...item,
                amount,
                total: amount * item.saleOffPrice,
              };
            }
          });
          return {
            ...state,
            cart: newCart1,
          };
    default:
      return state;
  }
};

export default rootReducer;
