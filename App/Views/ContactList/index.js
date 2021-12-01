import React, {useEffect, useState} from 'react';
import {View,Text,ScrollView,Pressable, TouchableOpacity, ImageBackground, Image, FlatList, Modal, TextInput, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import { Images } from '../../Assets/Images';
import { Theme } from '../../Assets/Styles';
import { addContact, deleteContact } from '../../Redux/actions';

const ContactList = ({navigation}) => {
  const dispatch = useDispatch();
  const getContacts = useSelector(state=>state.appEnv.contacts);
  const [contacts, setContacts] = useState([]);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const IsEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);
  
  useEffect(()=>{
    setContacts(getContacts);
  },[getContacts]);

  const deleteAContact = (index) => {
    getContacts.splice(index, 1);
    if (!IsEmpty(getContacts) && getContacts.length !== 0) {
      setContacts(getContacts);
    }else{
      setContacts([]);
    }
    dispatch(deleteContact(getContacts));
  }

  const renderContact = (data) => {
    return <View style={[Theme.selectedItems]}>
      <View style={[Theme.row, Theme.commonParent]}>
        <View style={[Theme.commonViewLeft,]}>
          <Image style={[Theme.commonImage]} source={Images.DEMO} />
        </View>
        <View style={[Theme.commonViewRight,]}>
          <View>
            <Text style={[Theme.orderHeading]}>
              {data.item.name}
            </Text>
          </View>
          <View style={[Theme.row]}>
            <Icon name="call" size={20} color={'#205988'} style={[Theme.phnMargin]}/>
            <Text style={[Theme.orderSubHeading, Theme.phnMargin]}>
              {data.item.phone}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={[Theme.commonViewDel,Theme.alignContentCenter]} onPress={()=>{deleteAContact(data.index)}}>
          <Icon name="delete" size={20} color={'#d91111'} style={[Theme.phnMargin]}/>
        </TouchableOpacity>
      </View>
    </View>
  }
  

  return (
    <>
      <SafeAreaView style={{height:'100%'}}>
        <View style={[Theme.mainHeadingView,Theme.row, Theme.justifySpcBtw]}>
          <View>
            <Text style={[Theme.mainHeading]}>Team Members</Text>
          </View>
          <Icon name="info" size={30} color={'#1b73bb'} />
        </View>
        <View>
          {!IsEmpty(contacts) ?
            <FlatList
              data={contacts}
              renderItem={renderContact}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{paddingBottom: '20%'}}
              ListFooterComponent={() => (
                <View>
                  <TouchableOpacity style={[Theme.alignContentCenter, Theme.buttonLook]} onPress={()=>{ navigation.navigate("addContact") }}>
                    <Text style={[Theme.buttonText]}>
                      Add Contact
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          :<View>
          <TouchableOpacity style={[Theme.alignContentCenter, Theme.buttonLook]} onPress={()=>{ navigation.navigate("addContact") }}>
            <Text style={[Theme.buttonText]}>
              Add Contact
            </Text>
          </TouchableOpacity>
        </View>}
        </View>
      </SafeAreaView>
    </>
  );
};

export default ContactList;
