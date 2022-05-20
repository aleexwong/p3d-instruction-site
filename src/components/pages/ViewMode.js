import React from 'react';

import questions from '../../instructions/InstructionViewModes';
import Banner from "../pages/Banner.js";
import "./ViewMode.css";

const ViewModes = () => {
    return (
        <Banner>
            <Banner.Header>View Mode</Banner.Header>
            {questions.map((question) => (
                <Banner.Entity key={question.id}>
                    <Banner.Question>{question.question}<div className='question'></div><img class ='modeIcons' src ={question.images1} width="" height="" alt=""/></Banner.Question>

                    <Banner.Text>{question.answer}
                        <br></br>
                        <img src={question.images2} width="" height="" alt="" />
                        <img src={question.images3} width="" height="" alt="" />
                        <img src={question.images4} width="" height="" alt="" />
                        <img src={question.images5} width="" height="" alt="" />
                    </Banner.Text>
                </Banner.Entity>
            ))}
        </Banner>
    );
};

export default ViewModes;