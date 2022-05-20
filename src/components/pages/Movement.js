import React from 'react';

import questions from '../../instructions/InstructionMovement.js';
import Banner from "../pages/Banner.js";
import './Instructions.css'

const Movement = () => {
    return (
        <Banner>
            <Banner.Header>Movement</Banner.Header>
            {questions.map((question) => (
                <Banner.Entity key={question.id}>
                    <Banner.Question>{question.question}</Banner.Question>
                    <Banner.Text><div className='question'>{question.answer}</div>
                        <br></br>
                        <img src={question.images1} width="" height="" alt="" />
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

export default Movement;