import React from 'react';

class PeopleList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            peopleArray: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(resultfromfetch => resultfromfetch.json())
        .then(resultfromabove => {
            this.setState({
                peopleArray: resultfromabove
            })
            console.log(this.state.peopleArray);
        })
    }

    render() {
        return (null);
    };
};

export default PeopleList;