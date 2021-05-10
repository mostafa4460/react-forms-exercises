import {useState} from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {color: "#000000", width: "10px", height: "10px"};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };
    const handleSubmit = e => {
        e.preventDefault();
        addBox({...formData});
    };

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <div className="NewBoxForm-field">
                <label htmlFor="color"><b>Color: </b></label>
                <input 
                    id="color"
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange} />
            </div>
            <div className="NewBoxForm-field">
                <label htmlFor="width"><b>Width: </b></label>
                <input 
                    id="width"
                    type="text"
                    name="width"
                    value={formData.width}
                    onChange={handleChange} />
            </div>
            <div className="NewBoxForm-field">
                <label htmlFor="height"><b>Height: </b></label>
                <input 
                    id="height"
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange} />
            </div>
            <button>Add Box</button>
        </form>
    );
}

export default NewBoxForm;