import './Colour.css';
import { changeColour } from '../../features/Colour/ColourSlice';

type Props = {
    colour: string,
    dispatch: (e:any) => void,
    eraseState: (e:any) => void,
    erase: boolean,
    handleFilling: (e:any) => void,
    handleCompleteReset: (e:any) => void
}

export const Colour: React.FC<Props> = ({colour, dispatch, eraseState, erase, handleFilling, handleCompleteReset}) => {

    return (
        <div className='color-picker-cont' >
            <button onClick={eraseState}>{erase === false ? 'Click to Erase' : 'Erasing' }</button>
           <input type='color' id='color-picker' defaultValue={colour} onBlur={e => dispatch(changeColour(e.target.value))}/>
           <button onClick={handleFilling}>Click to fill</button>
           <button onClick={handleCompleteReset}>Reset All</button>
        </div>
    )
}