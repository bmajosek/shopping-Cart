function shopReducer(state = { bun: 0, bread: 0, cupcake: 0 }, action)
{
    const product = action.payload;
    switch (action.type) {
        case 'add':
            return {...state, [product]: state[product] + 1};
        case 'delete':
            return {...state, [product]: state[product] - 1};
        case 'remove':
            return {...state, [product]: 0};
        default:
            return state;
    }
}
export default shopReducer;