import React from 'react';

class PeopleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.person.name,
            gender: props.person.gender,
            eyecolor: props.person.eye_color,
            haircolor: props.person.hair_color,
            url: props.person.url
        }
    }


    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card mx-auto my-2" style={{width: "16rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.state.gender}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{this.state.eyecolor}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{this.state.haircolor}</h6>
                        <a href={this.state.url} className="card-link">Click to See Direct JSON</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PeopleCard;