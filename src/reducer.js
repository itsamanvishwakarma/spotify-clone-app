export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: remove after development and set the of token is null
  token:
    "BQDkJaGJULMGMArLBqb52RD6TS4dV0YFgzcMzMVDkC4aN974Xh13pOsXdNnfHhiqc5LVwmygCfHNA7cgRWwvjkU69otHKv6FZJvPrEE1MWKRRFZi05uUqfn47jlF4fhS2eVgFQe5tgLXSruxFMM-pCoAHPGXeeoiZINpfUVToB04PumBBPDCY4zt8ugdLpGVL2S0SkXaD_F7knMV",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
export default reducer;
