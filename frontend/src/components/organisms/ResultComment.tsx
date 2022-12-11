import React from 'react'
import { FaRegSmile, FaRegFrown, FaRegMeh, FaRegFlushed } from "react-icons/fa";

type Score = {
  subject: string,
  score: number
}

type ResultCommentProps = {
  scores: Array<Score>,
  strongest: string
}

const ResultComment:React.FC<ResultCommentProps> = (props) => {
  const {strongest, scores} = props

  const emotion = (() => {
    switch(strongest.toLowerCase()) {
      case 'positive':
        return <FaRegSmile size="30px" color='#fa8232'/>
      case 'negative':
        return <FaRegFrown size="30px" color='#7cb5ec'/>
      case 'neutral':
        return <FaRegMeh size="30px" color='#54c136'/>
      case 'mixed':
        return <FaRegFlushed size="30px" color='#8884d8'/>
      default:
        return <FaRegSmile size="30px" color='#fa8232'/>
    }
  })()

  const degree = (() => {
    const score = scores.find(score => strongest.toLowerCase() === score.subject.toLowerCase())
    const point = score?.score
    if(!point) return ''
    if(point <= 50) {
      return 'どちらかと言えば'
    }
    if(point >= 51 && point <= 75) {
      return ''
    }
    if(point > 75) {
      return '強い'
    }
  })()

  const comment = (() => {
    switch(strongest.toLowerCase()) {
      case 'positive':
        return `喜怒哀楽のうち「喜」「楽」の印象を与えるメッセージです。<br>相手はあなたが好印象を持っているように受けとる可能性が高いでしょう。`
      case 'negative':
        return `喜怒哀楽のうち「怒」「哀」の印象を与えるメッセージです。<br>相手に対して批判的・攻撃的な意図がある、あるいは恐怖を抱いているように印象付ける可能性があります。`
      case 'neutral':
        return `感情的な印象を与えないメッセージです。<br>事務連絡には適切かもしれませんが、冷たい印象を与えるかもしれません。`
      case 'mixed':
        return `ポジティブとネガティブが入り混じっています。<br>相手はあなたがどのような気持ちでいるか判断するのが難しいかもしれません。`
      default:
        return ``
    }
  })

  const heading = (()=> {
    switch(strongest.toLowerCase()) {
      case 'positive':
        return 'ポジティブ'
      case 'negative':
        return 'ネガティブ'
      case 'neutral':
        return 'ニュートラル'
      case 'mixed':
        return '混在'
      default:
        return ''
    }
  })()

  return (
    <div>
      <div className="flex items-center mb-3">
       {emotion}
        <span className="font-bold text-[22px]">
        {degree}{heading}
          </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: comment()}} />
    </div>
  )
}

export default ResultComment