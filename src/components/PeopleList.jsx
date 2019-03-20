import React from 'react';
import PeopleCard from './PeopleCard';

class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peopleArray: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            //BELOW THEN IS TO CHANGE THE JSON STRING RECEIVED INTO AN ARRAY OF OBJECTS WE CAN USE IN JAVASCRIPT
            .then(resultfromfetch => resultfromfetch.json())
            //BELOW TAKES RESULT ARRAY OF OBJECTS FROM ABOVE FUNCTION AND UPDATES THE peopleArray STATE WITH THE ARRAY
            .then((resultfromabove) => {
                this.setState({
                    peopleArray: resultfromabove
                })
            })
    }

    render() {
        return (this.state.peopleArray.map((person, index) => {
            return (<PeopleCard key={index} person={person} />)
        }));
    };
};

export default PeopleList;