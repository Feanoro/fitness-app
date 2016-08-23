'use strict';

angular.module('fitnessApp')
    .controller('mainController', function($scope, $window, random_background){
        $scope.color = random_background;

        $scope.menu_visibility = true;

        $scope.toggleMenuVisibility = function(visible){
            $scope.menu_visibility = visible;
        };

        $scope.questions = [
            {
                type: "qt-close-question",
                statement: "Do you lose your balance because of dizziness?",
                options: [
                    {name: "True", answer: false},
                    {name: "False", answer: false},
                    {name: "Nothing at all", answer: false}
                ],
                config: {optionsType: "button"}
            },
            {
                type: "qt-close-question",
                statement: "When do you feel sore?",
                options: [
                    {name: "0 - 12 hours after I perform exercise.", answer: false},
                    {name: "12 - 24 hours after I perform exercise.", answer: false},
                    {name: "24 - 48 hours after I perform exercise.", answer: false},
                    {name: "48 - 72 hours after I perform exercise.", answer: false},
                    {name: "I rarely ever get sore.", answer: false},
                    {name: "I’ve never felt sore in my entire life.", answer: false}
                ],
                config: {optionsType: "radio"}
            },
            /*{
                type: "qt-close-question",
                statement: {name: "Biceps", img_src: "http://localhost:8080/fitness/web/assets/img/Bicep.jpg"},
                options: [
                    {name : "Left", answer: false},
                    {name : "Right", answer: false}
                ],
                config: {statementType: "img-left"}
            },*/
            {
                type: "qt-multiple-selection", 
                statement: "What components of fitness are you most interested in training?", 
                options: [
                    {name: "Cardio. Train like a marathon runner.", answer: false},
                    {name: "Strength. Train like a strongman/power lifter.", answer: false},
                    {name: "Flexibility. Train like a yoga master.", answer: false},
                    {name: "Aesthetics. Train like a body builder.", answer: false},
                    {name: "Sports Specific Training. Train like a sports athelete.", answer: false},
                    {name: "Injury Prevention. Train to conserve yourself.", answer: false}                    
                ], 
                config: {optionsType: "checkbox"}
            },
            {
                type: "qt-multiple-selection", 
                statement: "Where would you be willing to train?", 
                options: [
                    {name: "Park", img_src: "http://localhost:8080/fitness/web/assets/img/park.jpg", answer: false},
                    {name: "Home", img_src: "http://localhost:8080/fitness/web/assets/img/home.jpg", answer: false},
                    {name: "Gym", img_src: "http://localhost:8080/fitness/web/assets/img/gym.jpg", answer: false}                    
                ], 
                config: {optionsType: "img-block"}
            },            
            {
                type: "qt-open-question", 
                statement: "How many hours of sleep you get per day?",            
                answer : "",
                config: {
                    optionsType: "textfield",
                    label: "Type your ours"
                }
            },
            {
                type: "qt-open-question", 
                statement: "How many hours of sleep you get per day?",            
                answer : "",
                config: {
                    optionsType: "textfield",
                    label: "Type your ours",
                    align: "left"
                }
            },            
            {
                type: "qt-open-question", 
                statement: "Please explain",                
                answer : "",
                config: {
                    optionsType: "textarea",
                    label: "Write your answer here..."
                }
            },   
            {
                type: "qt-open-question", 
                statement: "Neck",                
                answer : "",                                
                config: {
                    optionsType: "img-left",
                    label: "Meassure",
                    img_src: "http://localhost/fitness/web/assets/img/Neck.jpg" 
                }
            },   
            {
                type: "qt-open-question", 
                statement: "Neck",                
                answer : ["", ""],                                
                config: {
                    optionsType: "img-left",
                    label: "Meassure",
                    img_src: "http://localhost/fitness/web/assets/img/Neck.jpg" 
                }
            },                                            
        ];
    });