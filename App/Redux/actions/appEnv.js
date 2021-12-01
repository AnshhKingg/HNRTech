import {Constants} from '../constants';

export const addContact = contact => {    
    return dispatch => dispatch({type: Constants.SET_CONTACT, payload: contact});
};

export const updateContact = contact => {    
    return dispatch => dispatch({type: Constants.SET_CONTACT, payload: contact});
};

export const updateBulkContact = contact => {    
    return dispatch => dispatch({type: Constants.SET_BULK_CONTACT, payload: contact});
};

export const deleteContact = contact => {    
    return dispatch => dispatch({type: Constants.DELETE_CONTACT, payload: contact});
};

export const resetContact = () => {
    return dispatch => dispatch({type:Constants.RESET_CONTACT});
}
