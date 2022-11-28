const hotNews = (state, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                hotNews: action.payload,
            };
            default:
                return state;
    }
}

export default hotNews;