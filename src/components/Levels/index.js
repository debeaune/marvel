import React from 'react'
import Stepper from 'react-stepper-horizontal'

const Levels = () => {
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