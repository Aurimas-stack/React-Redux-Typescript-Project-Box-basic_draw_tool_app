import './Squares.css';

type Props = {
  handleValueChange: (e: any) => void,
  squareValue: string[],
  colour: string,
  handleDragEnter: (e: any) => void,
  handleErasor: (e: any) => void,
  erase:boolean,
}

export const Squares: React.FC<Props> = ({handleValueChange, squareValue, handleDragEnter, handleErasor,erase}) => {
    let squares = [];
    for(let i = 0; i < 1107; i++) {
    squares.push(
      <div className='square' 
        key={i}
        id={i.toString()}
        onClick={handleValueChange}
        style={squareValue[i] !== '0' ? {backgroundColor: squareValue[i]} : {}}
        onDragEnter={erase === false ?handleDragEnter : handleErasor}


      >
      </div>
    )
  }
    return (
        <div className='square-cont'>
        {
          squares.map(square =>{
            return square
          })
        }
      </div>
    )
}