import {useReducer} from "react";

function reducer(state, action) {

    switch (action.type) {
        case "INCREMENT_A" :
            return {...state, a: state.a + action.payload};

        case "INCREMENT_B" :
            return {...state, b: state.b + action.payload};
        default:
            return {...state}
    }
}

export default function App() {

    let [state, dispatch] = useReducer(reducer, {a: 0, b: 0});
    console.log(state);
    let {a, b} = state;


    return (
        <div>
            <button onClick={() => {
                dispatch({type: "INCREMENT_A", payload: 1})
            }}>inc a - {a}</button>
            <br/>
            <button onClick={() => {
                dispatch({type: "INCREMENT_B", payload: 2})
            }}>inc b -{b}</button>
        </div>
    );
}


