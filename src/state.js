// default state

const defaultState = {
    user: {
        name: 'Kamil',
        email: 'kamil@brandwatch.com',
    },
    events: [
        {name: 'Loaded'}
    ],
}

let state = defaultState;

export function setState(newState) {
    state = newState;
    console.log(state);
    return state;
}

export function getState() {
    return state;
}