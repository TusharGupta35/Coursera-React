import { createStore, combineReducers } from "redux";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        })
    );
    
    return store;
}