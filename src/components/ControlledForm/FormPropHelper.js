export function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
 

const FormPropHelper = (props) => {
    let {id, name, label} = props
    id = id.toLowerCase()
    name = name ? name.toLowerCase() : id ? id : label ? label.toLowerCase() : ""
    label = label ? titleCase(label) : titleCase(name) 
    return {id, name, label}
}
export default FormPropHelper