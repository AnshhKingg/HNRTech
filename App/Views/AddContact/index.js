import React, {useEffect, useState} from 'react';
import {View,Text,ScrollView,Pressable, TouchableOpacity, ImageBackground, Image, FlatList, Modal, TextInput, SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import { Images } from '../../Assets/Images';
import { Theme } from '../../Assets/Styles';
import { addContact, updateBulkContact } from '../../Redux/actions';
import { selectContactPhone } from 'react-native-select-contact';

const AddContact = ({navigation}) => {
  const dispatch = useDispatch();
  const getContacts = useSelector(state=>state.appEnv.contacts);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [contacts, setContacts] = useState([]);
  
  // Used this hook for setting the contacts and the new added contact in to the local state to show in the list.
  useEffect(()=>{
    setContacts(getContacts);
  },[getContacts]);

  /**
   * addNewContact : To Add a New Contact in to the Contacts List
   * @Features : Checks if name and phone state variables are having values or not. If Not then either the contact details filled or selected from the 
   * phone's contact gets added in to the pre provided contact list by dispatching (addContact) action after checking if the number to be provoded exists 
   * in the contacts or not.  
   * @returns 
   */
  const addNewContact = () => {
    if(name == ""){
      Toast.show({
        type: 'error',
        text1: 'Name Empty!!',
        text2: 'Name field can not be blank.',
      });
      return;
    }
    if(phone == ""){
      Toast.show({
        type: 'error',
        text1: 'Phone Number Empty!!',
        text2: 'Phone Number field can not be blank.',
      });
      return;
    }
    var filtered = contacts.filter((item)=> (item.name==name&&item.phone==phone));
    
    if(filtered.length == 0){
      dispatch(addContact({"name":name, "phone":phone}));
      navigation.goBack();
    }else{
      Toast.show({
        type: 'error',
        text1: 'Duplicate Number',
        text2: 'User with the same number already exists.',
      });
    }
  }

  /**
   * onChangeeText : Sets value sof name and phone on having an onChange event triggered on TextInputs.
   * @param {*} value 
   * @param {*} setFor 
   */
  var onChangeeText = (value, setFor) => {
    if(setFor == "number"){
      setPhone(value);
    }
    if(setFor == "name"){
      setName(value);
    }
  }

  /**
   * getPhoneNumber : A function to get phone number list in which we pick one contact to add in to the list and dispatch action (addContact)
   * @returns 
   */
  var getPhoneNumber = () => {
    return selectContactPhone()
      .then(selection => {
        if (!selection) {
          return null;
        }
            
        let { contact, selectedPhone } = selection;
        console.log(`Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`);
        dispatch(addContact({"name":contact.name, "phone":selectedPhone.number}));
        navigation.goBack();
        return selectedPhone.number;
    });  
  }
  

  return (
    <>
      <SafeAreaView style={{height:'100%'}}>
        <View style={Theme.centeredView}>
          <View style={Theme.modalView}>
            <Text style={Theme.modalText}>Add New Contact</Text>
            <TextInput style={Theme.input} maxLength={100} placeholder={'Name'} onChangeText={(val)=>{ onChangeeText(val, "name") }} />
            <TextInput style={Theme.input} maxLength={100} placeholder={'Phone Number'} onChangeText={(val)=>{ onChangeeText(val, "number") }} />
            <View style={[Theme.row]}>
              <TouchableOpacity
              style={[Theme.button, Theme.buttonOpen]}
              onPress={()=> addNewContact()}
              >
                <Text style={Theme.textStyle}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[Theme.button, Theme.buttonClose]} onPress={() => getPhoneNumber() }>
                <Text style={Theme.textStyle}>Add From Phone</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[Theme.button, Theme.buttonClose]} onPress={() => navigation.goBack() }>
                <Text style={Theme.textStyle}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AddContact;
