import {AppStateType} from "../redux/store";


export const loadState = () => {
  try{
      const serializedState = localStorage.getItem("counterValue")
      if(serializedState===null) {
          return undefined
      }
      return JSON.parse(serializedState)
  }
  catch (err:any){
      return console.log('error getItem')
  }
};

export const saveState = (state: AppStateType) => {
  try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem("counterValue", serializedState)
  }
  catch {
  //    ignore
      return console.log('error setItem')
  }
}