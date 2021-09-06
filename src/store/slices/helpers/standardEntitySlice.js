import { createSlice } from "@reduxjs/toolkit"
const standardKey = (obj, key, defaultValue) => {
    if (key in obj) return
    obj[key] = defaultValue
}

const standardEntity = (config) => {
    standardKey(config, "attributes", [])
    standardKey(config, "name", "")
    standardKey(config, "reducers", {})
    standardKey(config, "indexes", [])
    let {attributes, name, reducers, indexes} = config

    attributes.unshift("id")
    attributes = [...new Set(attributes)] //Attributes should be unique
    indexes.filter(i => !!attributes.find(a => a == i)) //Indexes should be an attribute

    const initialState = {
        name,
        attributes,
        data: {},
        indexes: {}
    }
    indexes.forEach(i => initialState.indexes[i] = {})

    const add = (state, action) => {
        console.log({id: action.payload.id, data: state.data, truthy: action.payload.id in state.data})
        if(!(action.payload.id in state.data)){
            const id = action.payload.id
            const newEntry = {}
            state.attributes.forEach(a => {
                newEntry[a] = action.payload[a]
            })
            for(let k in state.indexes){
                if (k in action.payload){
                    if(!state.indexes[k][action.payload[k]]){
                        state.indexes[k][action.payload[k]] = id 
                    }
                }
            }
            state.data[id] = newEntry
        } else {
            console.warn("ID #" + action.payload.id + " already exists. Change action to 'modify'.")
        }
    }
    const modify = (state, action) => {
        let previousAttribute = {} 
        const id = action.payload.id
        if(id in state.data){
            const id = action.payload.id 
            for(let [k,v] of action.payload){
                if(state.attributes.find(x => x == k)) {
                    previousAttribute[k] = state.data[id][k]
                    state.data[id][k] = v
                }
            }

            for(let k in state.indexes){ // k represents the attribute in the index
                if (k in action.payload){ // Checks to see if there is that attribute in the payload
                    if(state.indexes[k][action.payload[k]]){ // If there is a change to the value of that attribute
                        const searchKey = previousAttribute[k] 
                        delete state.indexes[k][searchKey] // Deletes the old index if available
                        state.indexes[k][action.payload[k]] = id // Adds the new index value 
                    }
                }
            }

        } else {
            console.warn("ID #" + action.payload.id + " was not found. Change action to 'add'.")
        }
    }
    const remove = (state, action) => {
        const id = action.payload
        if(state.data[id]){
            for(let [k, v] of state.data[id]){
                if(k in state.indexes[k]){
                    delete state.indexes[k][v]
                }
            }
            delete state.data[id]
            
        } else if (!id) {
            console.warn("Could not delete item. ID in action payload not found")
        } else {
            console.warn("Could not delete item. ID #" + action.payload.id + " was not found. Change action to 'add'.")
        }
    }
    const addAttribute = (state, action) => {
        const attr = action.payload.attribute 
        const defaultVal = action.payload.defaultValue || null
        
        if (attr && !state.attributes.find(x => x == attr)) {
            state.attributes.push(attr)
            for(let k in state.data){
                state.data[k][attr] = defaultVal 
            }
        } else if (attr) {
            console.warn("Could not add attribute. " + attr + " already exist. ")
        } else {
            console.warn("No attribute provided in action for " + state.name + ".")
        }
    }
    const removeAttribute = (state, action) => {
        const attr = action.payload 
        if (!state.attributes.find(x => x == attr)){
            for(let key in state.data){
                delete state.data[key][attr]
            }
            delete state.indexes[attr]
        } else  {
            console.warn("Could not delete attribute. Attribute in action payload not found")
        }
    }
    const addIndex = (state, action) => {
        const indexBy = action.payload
        if(state.attributes.find(a => a == indexBy)){
            state.indexes[indexBy] = {}
            for(let id in state.data){ //For every item in the data
                if(indexBy in state.data[id]){ // If the attribute exists in the item
                    state.indexes[indexBy][state.data[id][indexBy]] = id
                }
            }
        } else {
            console.warn("Could not add index: " + indexBy + ", attribute not listed.")
        }
    }
    const removeIndex = (state, action) => {
        const index = action.payload
        delete state.indexes[index]
    }
    const resetData = (state) => {
        state.data = {}
        for(let key in state.indexes){
            state.indexes[key] = {}
        }
    }

    return createSlice({
        name, 
        initialState,
        reducers: {add,modify,remove,addAttribute,removeAttribute,addIndex,removeIndex,resetData, ...reducers}
    })
}
export default standardEntity