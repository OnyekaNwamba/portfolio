import React from 'react';
import Typewriter from 'components/Typewriter';
import Scrollchor from 'react-scrollchor';


class Education extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="edu-container">
                <Typewriter id="education" className="edu-title" text="Education" />
                <div className="edu-description">
                    <div className="edu-qmul">
                        <table>
                            <tr>
                                <th>When</th>
                                <th>Where</th>
                                <th>Result</th>
                            </tr>
                            <tr>
                                <td>{"2018 - Current"}</td>
                                <td>{"BSc Computer Science - Queen Mary, University of London"}</td>
                                <td>{"Prediction: 1st Class, Avg:85%"}</td>
                            </tr>
                            <tr>
                                <td>{"2016 - 2018"}</td>
                                <td>{"St Dominic's Sixth Form College"}</td>
                                <td>{"AAA"}</td>
                            </tr>
                            <tr>
                                <td>{"2012 - 2016"}</td>
                                <td>{"The Sacred Heart Language College"}</td>
                                <td>{"11 A*-A"}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;
