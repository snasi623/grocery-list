import React, { Component } from 'react';

class ContactMe extends Component {
    render() {
        return (
            <div>
                <form action="submit" className="contactMeForm">
                    <input placeholder="Name" type="text"/>
                    <input placeholder="Email" type="text"/>
                    <input placeholder="Phone" type="text"/>
                    <button className="btn btn-light">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactMe;