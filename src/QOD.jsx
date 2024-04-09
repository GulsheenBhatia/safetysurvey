import React from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function LifeguardSafetyQuiz() {
    const questions = [
        {
            type: "radiogroup",
            name: "question1",
            title: "What is the primary purpose of wearing a hard hat on a construction site?",
            choices: [
                "A) To keep your head warm",
                "B) To protect against falling objects",
                "C) To improve visibility",
                "D) To enhance hearing"
            ],
            correctAnswer: "B) To protect against falling objects",
            explanation: "Hard hats are designed to protect workers from head injuries caused by falling objects or debris on construction sites. They serve as a crucial safety measure to prevent serious head trauma."
        },
        {
            type: "radiogroup",
            name: "question2",
            title: "What should you do if you encounter a fire in the workplace?",
            choices: [
                "A) Try to extinguish it yourself",
                "B) Run away immediately",
                "C) Activate the nearest fire alarm and evacuate",
                "D) Ignore it and continue working"
            ],
            correctAnswer: "C) Activate the nearest fire alarm and evacuate",
            explanation: "In the event of a fire, safety protocols dictate that you should immediately activate the nearest fire alarm to alert others and evacuate the building following established evacuation procedures. Attempting to extinguish the fire yourself can be dangerous and should be left to trained professionals."
        },
        {
            type: "radiogroup",
            name: "question3",
            title: "Which of the following is an example of personal protective equipment (PPE) for eye safety?",
            choices: [
                "A) Gloves",
                "B) Earplugs",
                "C) Safety goggles",
                "D) Hard hat"
            ],
            correctAnswer: "C) Safety goggles",
            explanation: "Safety goggles are designed to protect the eyes from hazards such as flying debris, chemicals, or intense light. They form a crucial part of personal protective equipment (PPE) in environments where eye injuries are a risk."
        },
        {
            type: "radiogroup",
            name: "question4",
            title: "What is the correct procedure for lifting heavy objects?",
            choices: [
                "A) Bend your back to lift",
                "B) Keep your feet close together",
                "C) Lift with your legs, not your back",
                "D) Twist your body while lifting"
            ],
            correctAnswer: "C) Lift with your legs, not your back",
            explanation: "Proper lifting technique involves bending your knees and keeping your back straight while lifting heavy objects. This technique helps prevent back injuries by minimizing strain on the spine."
        },
        {
            type: "radiogroup",
            name: "question5",
            title: "What is the purpose of a safety data sheet (SDS)?",
            choices: [
                "A) To provide instructions for operating machinery",
                "B) To outline emergency evacuation procedures",
                "C) To provide information on hazardous chemicals",
                "D) To list employee contact information"
            ],
            correctAnswer: "C) To provide information on hazardous chemicals",
            explanation: "Safety data sheets (SDS) contain detailed information about hazardous chemicals, including their properties, potential hazards, handling procedures, and safety precautions. Employees should consult SDSs to understand the risks associated with the chemicals they work with."
        },
        {
            type: "radiogroup",
            name: "question6",
            title: "What should you do if you discover a spill of hazardous material?",
            choices: [
                "A) Ignore it and continue working",
                "B) Clean it up yourself",
                "C) Report it to your supervisor immediately",
                "D) Inform your coworkers and evacuate the area"
            ],
            correctAnswer: "C) Report it to your supervisor immediately",
            explanation: "Spills of hazardous materials pose serious risks to health and safety. Employees should report any spills they discover to their supervisor immediately so that appropriate cleanup measures can be taken by trained personnel."
        },
        {
            type: "radiogroup",
            name: "question7",
            title: "What is the purpose of a lockout/tagout procedure?",
            choices: [
                "A) To prevent unauthorized access to a restricted area",
                "B) To secure valuable equipment from theft",
                "C) To isolate energy sources and prevent accidental startup",
                "D) To control access to confidential information"
            ],
            correctAnswer: "C) To isolate energy sources and prevent accidental startup",
            explanation: "Lockout/tagout procedures are used to ensure that energy sources are properly isolated and equipment is safely de-energized before maintenance or servicing. This helps prevent accidental startup of machinery, which could result in serious injuries or fatalities."
        },
        {
            type: "radiogroup",
            name: "question8",
            title: "What does the acronym CPR stand for?",
            choices: [
                "A) Cardiopulmonary restoration",
                "B) Cardiopulmonary resuscitation",
                "C) Cardiovascular response",
                "D) Cardiorespiratory recovery"
            ],
            correctAnswer: "B) Cardiopulmonary resuscitation",
            explanation: "CPR stands for cardiopulmonary resuscitation, which is an emergency procedure performed to manually maintain blood circulation and oxygenation in a person who is in cardiac arrest."
        },
        {
            type: "radiogroup",
            name: "question9",
            title: "What is the recommended distance to keep from power lines when operating machinery?",
            choices: [
                "A) 5 feet",
                "B) 10 feet",
                "C) 15 feet",
                "D) 20 feet"
            ],
            correctAnswer: "C) 15 feet",
            explanation: "It is recommended to keep a distance of at least 15 feet from power lines when operating machinery to minimize the risk of electrocution. Contact with power lines can be fatal, so maintaining a safe distance is crucial."
        },
        {
            type: "radiogroup",
            name: "question10",
            title: "What is the purpose of a fire extinguisher?",
            choices: [
                "A) To cool down flames",
                "B) To create a barrier between the fire and oxygen",
                "C) To extinguish small fires",
                "D) To provide illumination in case of power failure"
            ],
            correctAnswer: "C) To extinguish small fires",
            explanation: "Fire extinguishers are portable devices used to suppress or extinguish small fires by releasing extinguishing agents such as water, foam, dry chemical, or carbon dioxide. They are an essential tool for fire safety in the workplace."
        }
    ];

     const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Lifeguard Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Lifeguard Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };

    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}