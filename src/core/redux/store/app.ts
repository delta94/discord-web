const initialState = {
  channelId: null,
  channelName: null,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHANNEL_ID':
      return { ...state, app: action.payload };
    default:
      return state;
  }
};

export const selectChannelId = (state) => state.app.selectChannelId;
export const selectChannelName = (state) => state.app.selectChannelName;

export default app;
