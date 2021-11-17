import React, {Component} from 'react'
import {QuizMarvel} from '../quizMarvel/'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'

class Quizz extends Component {

    state = {
        levelNames: ["debutant","confirme","expert"],
        quizLevel:0
    }

    loadQuestions = level => {
        console.log(level);
    }

    componentDidMount() {
        this.loadQuestions(this.state.levelNames[this.state.quizLevel])
    }

    render() {

        const {pseudo} = this.props.userData;

        return(
            <div> 
                <Levels />
                <ProgressBar />
                <h2>Notre question Quizz</h2>
                <p className="answerQuestions">Question 1</p>
                <p className="answerQuestions">Question 2</p>
                <p className="answerQuestions">Question 3</p>
                <p className="answerQuestions">Question 4</p>
                <button className="btnSubmit">Suivant</button>
            </div>
        )
    }      
}

export default Quizz;