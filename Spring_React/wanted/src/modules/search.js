const initialWord = {
  searchWord: "",
};

const SEARCHENTER = "search/SEARCHENTER";
const SEARCHEMPTY = "search/SEARCHEMPTY";

export const searchEnter = (word) => ({ type: SEARCHENTER, word: word });
export const searchEmpty = () => ({ type: SEARCHEMPTY });

function search(state = initialWord, action) {
  switch (action.type) {
    case SEARCHENTER:
      return {
        ...state,
        searchWord: action.word,
      };
    case SEARCHEMPTY:
      return {
        ...state,
        searchWord: "",
      };
    default:
      return state;
  }
}

export default search;
