const grabAddress = address => dispatch => {
  const app_id = 'sKNkZxZBCcuFygzqL91N'
  const app_code = 'MdlzSCxIIsWgGfbBCJPUrw'
  const config = `app_id=${app_id}&app_code=${app_code}&query=${address}`

  fetch(`http://autocomplete.geocoder.api.here.com/6.2/suggest.json?${config}`)
  .then(resp=>resp.json())
  .then(data=>{
    if (data.suggestions && data.suggestions.length && data.suggestions[1] && data.suggestions[1].label){
      const suggestion = data.suggestions[1].label
      const editedSuggestion = suggestion.split(',').reverse().join()
      dispatch({type:'DID-YOU-MEAN',payload:editedSuggestion})}
  })
};

export default {
  grabAddress
}

// 417 east broadway port jefferson 11777
