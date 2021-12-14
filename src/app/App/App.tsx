import './App.css';
import { useAppDispatch, useAppSelector } from '../tooks';
import { Colour } from '../../features/Colour/Colour';
import { Squares } from '../../features/Squares/Squares';
import { changeValue, eraseValue, fillSquares, resetBoard } from '../../features/Squares/SquaresSlice';
import { useState } from 'react';

export default function App() {
  const [erase, setErase] = useState(false);

  const dispatch = useAppDispatch();
  const colour = useAppSelector(state => state.colour.colour);
  const squareValue = useAppSelector(state => state.squares.squares);

  const handleValueChange = (e:any) => {
    dispatch(changeValue({index: e.target.id, colour: colour}))
  }
  const handleDragEnter = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
    if(erase === false) {
      dispatch(changeValue({index: e.target.id, colour:colour}))
    }
  }
  const eraseState = (e: any) => {
    e.preventDefault();
    setErase(!erase);
  }
  const handleErasor = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
    if(erase === true) {
      dispatch(eraseValue(e.target.id))
    }
  }
  const handleFilling = (e:any) => {
    e.preventDefault();
    dispatch(fillSquares(colour))
  }
  const handleCompleteReset = (e:any) => {
    e.preventDefault();
    dispatch(resetBoard());
  }
  return (
    <div className="App">
      <div className='tool-cont' >
      <Colour 
          erase={erase}
          colour={colour} 
          dispatch={dispatch}
          eraseState={eraseState}
          handleFilling={handleFilling}
          handleCompleteReset={handleCompleteReset} />
      </div>
      <Squares
        handleDragEnter={handleDragEnter}
        handleValueChange={handleValueChange} 
        squareValue={squareValue} 
        colour={colour}
        erase={erase}
        handleErasor={handleErasor}/>
    </div>
  );
}

