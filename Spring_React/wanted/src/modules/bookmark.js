const intialID = {
  trueID: [],
};
//반드시 객체 형태이어야 한다.

const BOOKMARKTRUE = "bookmark/BOOKMARKTRUE";
const BOOKMARKFALSE = "bookmark/BOOKMARKFALSE";

export const bookmarkTrue = (id) => ({ type: BOOKMARKTRUE, id: id });
export const bookmarkFalse = (id) => ({ type: BOOKMARKFALSE, id: id });

function bookmark(state = intialID, action) {
  switch (action.type) {
    case BOOKMARKTRUE:
      return {
        ...state,
        trueID: state.trueID.concat(action.id),
      };
    case BOOKMARKFALSE:
      return {
        ...state,
        trueID: state.trueID.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
}

export default bookmark;
