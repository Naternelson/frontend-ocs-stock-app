export default function getNested(...arr) {
    return obj => {
        try {
            console.log({obj, arr})
            arr.forEach(a => {
                obj = obj[a]
            })
            return obj
        } catch (err) {
            return undefined
        }
    }
}