import React from 'react';
import Typewriter from 'components/Typewriter';
import Scrollchor from 'react-scrollchor';


class WorkExperience extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="we-container">
                <Typewriter id="education" className="we-title" text="Work Experience & Internships" />
                <div className="we-description">
                    <div className="inner">

                        <div className="gocode">
                            <a target="_blank" href="http://qmul.ac.uk"><img className="icon" src="https://pbs.twimg.com/profile_images/1514120070/QM_logo_for_social_media_400x400.JPG"/></a><b>Queen Mary, University of London</b>
                            <span className="right"><i>September 2019 - Current</i></span><br/><b>Demonstrator</b>
                            <span className="right"><i>London, UK</i></span><br/><br/>
                            <ul>
                                <span>Responsibilities:</span><br />
                                <li>Supporting students in difficulties encountered with the Computer Science course material presented</li>
                                <li>Supporting students in completing laboratory work and formative exercises</li>
                                <li>Provide feedback on individual student’s work as requested</li>
                                <li>Assist in marking courseworks and in-class assessments as needed.</li>
                                <li>This role required greate o	technical knowledge, time-keeping and professionalism, good communication skills  and the ability to work as part of a (teaching) team
                                </li>
                            </ul>
                        </div>

                        <div className="gocode">
                            <a target="_blank" href="http://gocode.academy"><img className="icon" src="https://cdn.evbuc.com/images/44271026/195426384363/2/logo.jpg"/></a><b>GoCode Academy</b>
                            <span className="right"><i>November 2018 - September 2019</i></span><br/><b>Computer Science Tutor</b>
                            <span className="right"><i>London, UK</i></span><br/><br/>
                            <ul>
                                <span>Responsibilities:</span><br />
                                <li>Tutoring children between 8 - 18 basic computer science theory and programming languages such as Python,
                                    HTML, CSS, Scratch and JavaScript</li>
                                <li>Creating resources for students to learn</li>
                                <li>Leading lessons as one of the leading teachers</li>
                            </ul>
                        </div>

                        <div className="gocode">
                            <a target="_blank" href="http://qmul.ac.uk"><img className="icon" src="https://pbs.twimg.com/profile_images/875392880919097344/vONkLEeS_400x400.jpg"/></a><b>Code Club</b>
                            <span className="right"><i>September 2016 - 2018</i></span><br/><b>Coding Volunteer</b>
                            <span className="right"><i>London, UK</i></span><br/><br/>
                            <ul>
                                <span>Responsibilities:</span><br />
                                <li>Volunteered at Code Club since 2016 where we volunteered to teach kids programming</li>
                                <li>Became a Team Leader Member where I was tasked withorganizing lessons and leading the rest of the volunteer teachers.</li>
                                <li>Later promoted to Program Leader, where I was tasked to code programming projects for students to learn from</li>
                            </ul>
                        </div>


                        {/*
                        <div className="gocode">
                            <a target="_blank" href="http://qmsu.org"><img className="icon" src="https://pbs.twimg.com/profile_images/1148172677288513538/6NZLvPhn_400x400.jpg"/></a><b>Queen Mary Student Union</b>
                            <span className="right"><i>September 2018 - June 2018</i></span><br/><b>Full-Stack Developer Intern</b>
                            <span className="right"><i>London, UK</i></span><br/><br/>
                            <ul>
                                <span>Responsibilities:</span><br />
                                <li>Tutoring children between 8 - 18 basic computer science theory and programming languages such as Python,
                                    HTML, CSS, Scratch and JavaScript</li>
                                <li>Object-Oriented Programming</li>
                                <li>Creating resources for students to learn</li>
                                <li>Leading lessons as one of the leading teachers</li>
                            </ul>
                        </div>
                        **/}
                    </div>
                </div>
            </div>

        );
    }
}

export default WorkExperience;
