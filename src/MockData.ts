import {gateWays, devices} from './data'
export function getId(nameEntr){
    let name
    gateWays.map(index => {
        if(index.id === nameEntr){
            name = index.name;
        }
    })
    return name;
}