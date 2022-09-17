function shopReducer(state = { bun: 0, bread: 0, cupcake: 0 }, action)
{
    console.log(action.type);
    if(action.type === 'bun')
    {
    return {...state, bun: state.bun + 1};
    }
    else if(action.type === 'bread')
    {
    return {...state, bread: state.bread + 1};
    }
    else if(action.type === 'cupcake')
    {
    return {...state, cupcake: state.cupcake + 1};
    }
    else if(action.type === 'deletebun' && state.bun)
    {
    return {...state, bun: state.bun - 1};
    }
    else if(action.type === 'deletebread' && state.bread)
    {
    return {...state, bread: state.bread - 1};
    }
    else if(action.type === 'deletecupcake' && state.cupcake)
    {
    return {...state, cupcake: state.cupcake - 1};
    }
    return state;
}
export default shopReducer;