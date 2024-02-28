const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "CHANGE_OVERLAY_SHOW": {
      return {
        ...state,
        isOverlayShow: action.payload,
      };
    }
  }
};

export default appReducer;
