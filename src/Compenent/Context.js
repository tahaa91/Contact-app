import { createContext, useState } from "react";
import React from 'react'
import { v4 as uuid } from "uuid";
export const test = createContext();




export default function Context({children}) {

    const [list,setList] = useState([])


    const [ncont,setNcont] = useState()
    const [nnum,setnnum] = useState()
    const [ville,setVille] = useState()



    const ajout = ()=>{
        let T = [...list];
        let O = {};
        O.name = ncont;
        O.num = nnum;
        O.ville = ville;
        O.id  = uuid()
        T.push(O);
        setNcont("");
        setnnum("");
        setVille("");
        setList(T);
    }


    const supp= (id)=>{
      let y =  list.filter((l)=>{
        return l.id != id ;
      })
      setList(y);
    }

    const sorttabl = ()=>{
      let a = list.sort();
      setList(a);
    }

    const sortedArray = list.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })

  return (
    <test.Provider value={{list,setList,ncont,setNcont,nnum,setnnum,ajout,supp,ville,setVille,sorttabl,sortedArray}}>
      {children}
    </test.Provider>
  )
}


