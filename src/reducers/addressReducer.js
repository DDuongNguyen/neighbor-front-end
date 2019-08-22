const defaultState = {
  address:''}

  export default (state = defaultState, { type, payload }) => {
    switch (type) {
      case "DID-YOU-MEAN":
        return {...state, address:payload};
      default:
          return state;
}}
