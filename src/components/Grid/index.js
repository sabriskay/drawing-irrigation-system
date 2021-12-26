import { Group, Line } from 'react-konva';

function Grid () {
    const size = 5000;
    const step = 1;
    const lineCount = 100;
    const halfSize = size / 2;

    return (
        <Group>
            {
                /* Verticals from -5000 to +5000 */
                [...Array(lineCount)].map((_, i) => (
                    <Line key={i} stroke='grey' strokeWidth={0.5} points={[
                        size * i * step / lineCount - halfSize, -size, size * i * step / lineCount - halfSize, +size
                    ]}></Line>
                ))
            }

            {
                /* Horizontals from -5000 to +5000 */
                [...Array(1000)].map((_, i) => (
                    <Line key={i} stroke='grey' strokeWidth={0.5} points={[
                        -size, size * i * step / lineCount - halfSize, +size, size * i * step / lineCount - halfSize
                    ]}></Line>
                ))
            }
        </Group>
    );
}
    
export default Grid;