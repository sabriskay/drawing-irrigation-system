import { atom } from 'recoil';

const treesState = atom({
    key: 'trees',
    default: {
        1: {
            x: 200,
            y: 200,
            radius: 100,
            id: 1
        },
        2: {
            x: 400,
            y: 500,
            radius: 50,
            id: 2
        }
    }
});

export default treesState;