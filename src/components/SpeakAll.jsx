import React, {useState} from 'react';
import {verbs} from "../data/data";
import st from './styles/LeftPanel.module.css';
import {VerbColumn} from "./VerbColumn";
import {CheckColumn} from "./CheckColumn";

let synth = window.speechSynthesis;

export const SpeakAll = () => {
  const [cn, setCn] = useState(['','','']);
  const [checkArr, setCheckArr] = useState(new Array(verbs.length).fill(true));
  const [isAllCheckShow, setIsAllCheckShow] = useState(true);

  const [outVerbs, setOutVerbs] = useState(
    {
      infinitive: '',
      past: '',
      participle: '',
      translate: '',
    });
  const [isInfinitiveShow, setInfinitiveShow] = useState(true);
  const [isPastShow, setPastShow] = useState(true);
  const [isParticipleShow, setParticipleShow] = useState(true);

  const varCn = [['active','',''], ['','active',''], ['','','active']];

  const changeVerbs = (item, i) => {
    setCn(varCn[i]);
    setOutVerbs(
      {
        infinitive: item[0],
        past: item[1],
        participle: item[2],
        translate: item[3],
      }
    )
  }

  const speak = () => {
    verbs.forEach((item, index) =>{
      item.forEach((word, i) => {
        if (i !==3 && checkArr[index]) {
          const synthesizer = new SpeechSynthesisUtterance(word);
          synth.speak(synthesizer);
          synthesizer.onstart = () => changeVerbs(item, i);
        }
      })
    })
  }

  return (
    <div className='wrapper'>
      <div className={st.leftPanel}>
        <VerbColumn column={0} type='infinitive' show={isInfinitiveShow} change={setInfinitiveShow}/>
        <VerbColumn column={1} type='past' show={isPastShow} change={setPastShow}/>
        <VerbColumn column={2} type='participle' show={isParticipleShow} change={setParticipleShow}/>
        {(isInfinitiveShow || isPastShow || isParticipleShow)
          && <CheckColumn
            checkArr={checkArr}
            setCheckArr={setCheckArr}
            setCheckAll={setIsAllCheckShow}
            checkAll={isAllCheckShow}/>}
      </div>
      <div className='words_wrapper'>
         <div className='word'>
          <div className={cn[0]}>{outVerbs.infinitive}</div>
          <div className={cn[1]}>{outVerbs.past}</div>
          <div className={cn[2]}>{outVerbs.participle}</div>
          <div className='translate'>{outVerbs.translate}</div>
        </div>
        <div>
          <button onClick={speak}>Go</button>
        </div>
      </div>
    </div>
  );
};
