import {verbs} from "../data/data";

export const VerbColumn = ({ column , type, change, show } ) => {
  return (
    <div>
      <p style={{fontWeight: 'bold'}}>
        {type}
        <input
          onChange={() => change(!show)}
          type="checkbox"
          defaultChecked={show}/>
      </p>
      <hr/>
      <div>
        {show && verbs.map(word => <p key={word[column]}>{word[column]}</p>)}
      </div>
    </div>
  )
}
