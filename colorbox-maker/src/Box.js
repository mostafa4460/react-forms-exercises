import "./Box.css";

const Box = ({color, width, height, removeBox}) => (
    <div className="Box">
        <div style={{
                backgroundColor: color,
                width: width,
                height: height}}>
        </div>
        <button onClick={removeBox}>X</button> 
    </div>
);

export default Box;