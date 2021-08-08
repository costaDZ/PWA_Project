import { HANDEL_SCROLL, Handel_SideBar } from '../actions/action';
import { cars } from '../../carInfo.js';

const initialState = {
    cars,
    position: 1,
    sideBar: false,
};

export const reducer = (state = initialState, actions) => {

    const { type, payload } = actions;


    switch (type) {
        case HANDEL_SCROLL:
            let opacity = (Number(payload.toString().slice(2)));
            let itemIndex = (Number(payload.toString().slice(0, 1)));
            if (opacity >= 5 && opacity <= 9) {
                return {
                    ...state,
                    opacity: '.' + 0,
                    currentItem: state.cars.filter(item => item.id === itemIndex),
                }
            } else {
                return {
                    ...state,
                    opacity: 1,
                    currentItem: state.cars.filter(item => item.id === itemIndex),
                }
            }
        case Handel_SideBar:
            //     const { dir } = payload;
            console.log(payload);

            const val = payload === "close" ? false : true;
            return {
                ...state,
                sideBar: val,
            };
        default:
            break;
    }

    return state;
}