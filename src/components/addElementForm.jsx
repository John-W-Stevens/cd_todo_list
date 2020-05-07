import React from "react"


const AddElementForm = props => {

    const { elements, setElements } = props
    let element = {
        name: "",
        isComplete: false
    };

    const onChange = (e) => {
        element.name = e.target.value
    };
    const onSubmit = (e) => {
        e.preventDefault()
        setElements( [...elements, element] )
        
    }

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <form onSubmit = { onSubmit }>
                    <div className="form-group">
                        <label>Add element:</label>
                        <input onChange = { onChange } type="text" name="input" className="form-control"></input>
                    </div>
                    <div className="form-group text-right">
                        <button className="btn btn-primary btn-sm">Add an element</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddElementForm

