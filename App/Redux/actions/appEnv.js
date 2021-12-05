import {Constants} from '../constants';

/**
 * addContact: To Add a New Contact once called from the View with the requited params.
 * @param {*} contact 
 * @returns 
 */
export const addContact = contact => {    
    return dispatch => dispatch({type: Constants.SET_CONTACT, payload: contact});
};

/**
 * updateContact : To update a single contact details.
 * NOTE: Not used in the project as per the requirements. 
 * @param {*} contact 
 * @returns 
 */
export const updateContact = contact => {    
    return dispatch => dispatch({type: Constants.SET_CONTACT, payload: contact});
};

/**
 * updateBulkContact: To Update the entire list of contact  or Update Bunch of contact at once (In case needed)
 * NOTE: Basically This was created to update the precreated contact list once we delete any contact but this was performing differently.Not used in this project anymore.
 * @param {*} contact 
 * @returns 
 */
export const updateBulkContact = contact => {    
    return dispatch => dispatch({type: Constants.SET_BULK_CONTACT, payload: contact});
};

/**
 * deleteContact : To delete a contact from the contact list stored locally when dispatched from the view.
 * @param {*} contact 
 * @returns 
 */
export const deleteContact = contact => {    
    return dispatch => dispatch({type: Constants.DELETE_CONTACT, payload: contact});
};

/**
 * resetContact : To Resetting the Locally stored the contact list to the initial state.
 * NOTE: This was created and used to help for resetting the contact while development.Not used in the application
 * @returns 
 */
export const resetContact = () => {
    return dispatch => dispatch({type:Constants.RESET_CONTACT});
}
