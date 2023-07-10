import { useEffect, useRef, useState } from 'react'
import TextReadOnly from '../components/TextReadOnly'
import Button from '../components/Button'
import './MainScreen.css'
import IdeaController from '../controller/IdeaController'

const MainScreen = () => {
    const ideaCont = new IdeaController();
    const [textFields, setTextFields] = useState(['']);
    const howManyFields = useRef(1);

    useEffect(() => {
        howManyFields.current = 2;
        // const result = ideaCont.generateNewIdeas({howMany: howManyFields.current, initLoad: true});
        generateIdeas({howMany: howManyFields.current, initLoad: true});
    }, [])

    function generateIdeas({howMany, initLoad} : {howMany: number, initLoad?: boolean}){
        setTextFields(ideaCont.generateNewIdeas({howMany: howMany, initLoad: initLoad}))
    }

    function generateFields(textField: string[]) {
        return textField.map((element, index) => {
            return <TextReadOnly text={element} textClassList='textField' />
        })
    }

    function randomizeClicked(){
        generateIdeas({howMany: howManyFields.current});
    }

    return (
        <div className='MainScreen'>
            <span>Make a story that must use these {howManyFields.current} elements.</span>
            {generateFields(textFields)}
            <Button buttonText='Randomize' buttonOnClick={() => randomizeClicked()}/>
        </div>
    )
}

export default MainScreen