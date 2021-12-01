import {Constants} from '../constants/index';

const initialState = {
  contacts:[
    {
      "name": "Test1",
      "phone": "9999999999"
    },
    {
      "name": "Test1",
      "phone": "9999999999"
    },
    {
      "name": "Test2",
      "phone": "9999999998"
    },
    {
      "name": "ATest3",
      "phone": "9999999997"
    },
    {
      "name": "BTest4",
      "phone": "9999999996"
    },
    {
      "name": "CTest5",
      "phone": "9999999995"
    },
    {
      "name": "DTest6",
      "phone": "9999999994"
    },
    {
      "name": "ETest7",
      "phone": "9999999993"
    },
    {
      "name": "FTest8",
      "phone": "9999999992"
    },
    {
      "name": "GTest9",
      "phone": "9999999991"
    },
    {
      "name": "HTest10",
      "phone": "9999999990"
    },
    {
      "name": "ITest11",
      "phone": "9999999981"
    },
    {
      "name": "JTest12",
      "phone": "9999999982"
    },
    {
      "name": "KTest13",
      "phone": "9999999983"
    },
    {
      "name": "LTest14",
      "phone": "9999999984"
    },
    {
      "name": "MTest15",
      "phone": "9999999985"
    },
    {
      "name": "NTest16",
      "phone": "9999999986"
    },
    {
      "name": "OTest17",
      "phone": "9999999987"
    } 
  ] ,
};

const appEnv = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    
    case Constants.SET_BULK_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };

    case Constants.DELETE_CONTACT:
      var updatedState = state.contacts.map((item,indx)=>{
        if(item.name !== action.payload.name && item.phone !== action.payload.phone){
          return item;
        }
      })
      return {
        ...state,
        contacts: updatedState,
      };
    
    case Constants.RESET_CONTACT:
      return {
        ...state,
        contacts: initialState.contacts
      };

    default:
      return state;
  }
};

export default appEnv;
