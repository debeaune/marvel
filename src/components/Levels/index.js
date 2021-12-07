import React, {useEffect, useState} from 'react'
import Stepper from 'react-stepper-horizontal'

const Levels = ({levelNames,quizLevel}) => {

    const [levels, setLevels] = useState([]);

    useEffect(()=>{
        const quizSteps = levelNames.map( level => ({title:level}));
        setLevels(quizSteps);
        
    }, [levelNames]);

    return (
        <div className="levelsContainer">
            <div>
                <Stepper steps={[
                 { label: 'Débutant' },
                 { label: 'Confirmé' }, 
                 { label: 'Expert' }
                 ]
                 }
                 activeStep={1}/>
            </div>       
        </div>
    )
}

export default Levels;