import useImage from 'use-image';
import { Image } from 'react-konva';

function Tree (props) {
    const [ image ] = useImage('./assets/tree.png');
    const size = props.selected ? props.radius * 1.1 : props.radius;

    return (
        <Image
            x={props.x - size/2}
            y={props.y - size/2}
            width={ size }
            height={ size }
            onClick={() => props.onClick()}
            image={image}
        />
    );
}
    
export default Tree;