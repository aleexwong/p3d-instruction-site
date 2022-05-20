import React from 'react';

import questions from '../../instructions/InstructionFunctionality';
import Banner from "../pages/Banner.js";

const Functionality = () => {
    return (
        <Banner>
            <Banner.Header>Functionality</Banner.Header>
            {questions.map((question) => (
                <Banner.Entity key={question.id}>
                    <Banner.Question>{question.question}<div className='question'></div>
                        <img class='modeIcons' src={question.images1} width="" height="" alt="" />
                    </Banner.Question>

                    <Banner.Text>{question.answer}
                        <br></br>
                        <img class='topicImage' src={question.images2} width="" height="" alt="" />
                        <img class="topicImage" src={question.images3} width="" height="" alt="" />
                        <img class="topicImage" src={question.images4} width="" height="" alt="" />
                        <img class="topicImage" src={question.images5} width="" height="" alt="" />
                    </Banner.Text>
                </Banner.Entity>
            ))}
        </Banner>
    );
};

export default Functionality;