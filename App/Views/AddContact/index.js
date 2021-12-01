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
  
  useEffect(()=>{
    setContacts(getContacts);
  },[getContacts]);

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

  var onChangeeText = (value, setFor) => {
    if(setFor == "number"){
      setPhone(value);
    }
    if(setFor == "name"){
      setName(value);
    }
  }

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
