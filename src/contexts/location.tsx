import {createContext, useState} from 'react'
const ipify = require('ipify')


interface LocationContext {
    ip: number;

}

(async ()=> {
    ipify
})()

export const LocationContext = createContext({} as LocationContext)

export function LocationContextProvider({children}) {

}