import { atom } from 'recoil';

const selectedElement = atom({
    key: 'selectedElement',
    default: null,
});

export default selectedElement;