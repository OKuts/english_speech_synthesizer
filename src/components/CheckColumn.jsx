import React, {useEffect} from "react";
import {verbs} from "../data/data";

export const CheckColumn = ({checkAll, setCheckAll, checkArr, setCheckArr}) => {
  const changeAll = () => {
    const temp = !checkAll;
    setCheckAll(temp);
    setCheckArr(checkArr.map(item => temp));
  }

  return (
    <div>
      <p style={{fontWeight: 'bold'}}>all
        <input
          onChange={changeAll}
          type="checkbox"
          checked={checkAll}/>
      </p>
      <hr/>
      <div>
        {verbs.map((word, i) =>
          <p key={i}>
            <input
              onChange={() => setCheckArr(checkArr.map((item, j)=> i===j ? !item : item))}
              type="checkbox"
              checked={checkArr[i]}/>
          </p>)}
      </div>
    </div>
  )
}
