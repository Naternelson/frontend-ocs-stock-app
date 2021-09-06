export default function UniqueIdGenerator() {
    const ids = new Set()
    return () => {
        const idFn = () => Math.floor(Math.random() * 10000)
        let  id = idFn()
        while(ids.has(id)){
            id = idFn()
            ids.add(id)
        }
        return id 
    } 
}