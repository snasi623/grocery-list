import { useState } from "react";

function ContactMe() {    
    
    const [values, setValues] = useState({
        firstName: '', lastName: '', email: '', comments: '' 
    });
    
    const set = name => {
        return ({target: {value} }) => {
            setValues(oldValues => ({...oldValues, [name]: value}))
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        window.alert("Thank you for your form submission")
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            input => (input.value = "")
        );
    }

    return (
        <div className="contactMeForm">
            <form action="submit" className="form-group" onSubmit={onSubmit}>
                <label>First Name:</label>
                <input value={values.firstName} onChange={set('firstName')} placeholder="First Name" type="text" required="required" className="form-control"/>
                <label>Last Name:</label>
                <input value={values.lastName} onChange={set('lastName')} placeholder="Last Name" type="text" required="required" className="form-control"/>
                <label>Email:</label>
                <input value={values.email} onChange={set('email')} placeholder="Email" type="email" required="required" className="form-control"/>
                <label>Comments:</label>
                <textarea value={values.comments} onChange={set('comments')} placeholder="Comments" type="text" required="required" className="form-control"/>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}

export default ContactMe;