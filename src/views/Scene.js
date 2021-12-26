import { React, useState } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import TreeComponent from '../components/Tree';
import GridComponent from '../components/Grid';
import { useRecoilState } from 'recoil';
import treesState from '../contexts/Tree';
import ElementSelected from '../contexts/Element';

function Scene() {
    const [ elementSelected, setElementSelected ] = useRecoilState(ElementSelected);
    const [ stageZoom, setStageZoom ] = useState(1);
    const [ stageXPosition, setStageXPosition ] = useState(0);
    const [ stageYPosition, setStageYPosition ] = useState(0);
    const [ trees ] = useRecoilState(treesState);

    const handleMouseWheel = event => {
        event.evt.preventDefault();
    
        const scaleBy = 1.02;
        const stage = event.target.getStage();
        const oldScale = stage.scaleX();
        const mousePointTo = {
          x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
          y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        };
    
        const newScale = event.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
    
        setStageZoom(newScale);
        setStageXPosition(-(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale);
        setStageYPosition(-(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale);
    };

    return (
        <Stage
            draggable
            width={window.innerWidth}
            height={window.innerHeight}
            scaleX={stageZoom}
            scaleY={stageZoom}
            x={stageXPosition}
            y={stageYPosition}
            onWheel={handleMouseWheel}
        >
            <Layer>
                <Text text="Try to drag a star" />
                <GridComponent key={1} />

                {Object.keys(trees).map(treeID => {
                const tree = trees[treeID];

                return (
                    <TreeComponent
                        key={tree.id}
                        x={tree.x} 
                        y={tree.y} 
                        radius={tree.radius} 
                        onClick={() => elementSelected?.id === tree.id ? setElementSelected(undefined) : setElementSelected(tree)} 
                        selected={elementSelected?.id === tree.id}
                    />
                );
                })}
            </Layer>
        </Stage>
    )

}

export default Scene;