import React, { useState } from "react"

function Button(props) {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  );
}
const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad;
    const average = ((props.good - props.bad) / all); 
    const positive = ((props.good * 100) / all);
    if (!all){
      return <p>No feedback</p>
    }
    return(
      <table>
        <tbody>
          <StatisticLine text ="good" value ={good}  />
          <StatisticLine text ="neutral" value ={neutral}  />
          <StatisticLine text ="bad" value ={bad} />
          <StatisticLine text = "all" value = {all} />
          <StatisticLine text = "average" value = {average} />
          <StatisticLine text = "positive" value = {positive} />
        </tbody>
      </table>
    );
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick = {() => setGood(good + 1)} />
      <Button name="neutral" handleClick = {() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick = {() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  );
}
export default App




// <tr>
// <td>good</td>
// <td></td>
// </tr>
// <tr>
// <td>neutral</td>
// <td></td>
// </tr>
// <tr>
// <td>bad</td>
// <td></td>
// </tr>
// <tr>
// <td>all</td>
// <td></td>
// </tr>
// <tr>
// <td>average</td>
// <td></td>
// </tr>
// <tr>
// <td>positive</td>
// <td></td>
// </tr>