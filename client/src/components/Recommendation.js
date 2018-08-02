
const Recommendation = (props) => {
  const { temperature, humidity, wind } = props
  if (temperature > 80) {
    return "It's a hot day today, remember to use an alcohol free cleanser to wash off at night."
  } else if (temperature < 30) {
    return "Today is cold, remember to use a stronger moisturizer."
  } else if (humidity > 75) {
    return "Today is very humid, switch to a heavy duty cleanser to deep clean and remove excess oil."
  } else {
    return ''
  }
}

export default Recommendation;
