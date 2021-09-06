export default function getNested(...arr) {
    return obj => {
        try {
            arr.forEach(a => {
                obj = obj[a]
            })
            return obj
        } catch (err) {
            return undefined
        }
    }
}
export const selectorFn = (aspect) => {
    let selector = typeof aspect === "string" ? str.split(".") : typeof aspect === "array" ? aspect : null  
    return getNested(...selector)
}