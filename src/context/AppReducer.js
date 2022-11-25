const hotNews = (state, action) => {
    switch (action.type) {
        case "Get_News":
            return {
                ...state,
                hotNews: action.payload,
            };
            default:
                return state;
    }
}

export default hotNews;