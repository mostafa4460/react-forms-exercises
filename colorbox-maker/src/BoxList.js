import {useState} from "react";
import {v4 as uuid} from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import "./BoxList.css";

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), color: "red", width: "90px", height: "90px"},
        {id: uuid(), color: "white", width: "90px", height: "90px"},
        {id: uuid(), color: "blue", width: "90px", height: "90px"}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = newBox => {
        setBoxes(boxes => [...boxes, {id: uuid(), ...newBox}]);
    };
    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {boxes.map( ({id, color, width, height}) => (
                <Box
                    key={id}
                    color={color} 
                    width={width} 
                    height={height}
                    removeBox={() => removeBox(id)} />
            ))}
        </div>
    );
}

export default BoxList;