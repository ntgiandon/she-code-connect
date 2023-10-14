import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle';
import styles from './styles';

const Profile = ({
  photoURL,
  displayName,
  email,
  faculty,
  DOB,
  _class,
  phone,
  studentId,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.imageView}>
        <Image
          style={styles.avatar}
          source={{
            uri: `${photoURL}`,
          }}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <ScrollView style={styles.containerInput}>
            <Text style={[styles.name, GlobalStyle.CustomFontSpecial]}>
              {displayName}
            </Text>
            <Text style={[styles.name, GlobalStyle.CustomFontBody]}>
              {email}
            </Text>
            <View style={styles.containerDetail}>
              <View style={styles.detail}>
                <Text style={GlobalStyle.CustomFontBig}>Student ID: </Text>
                <Text style={[GlobalStyle.CustomFontBody]}>{studentId}</Text>
              </View>
              <View style={styles.detail}>
                <Text style={GlobalStyle.CustomFontBig}>Faculty: </Text>
                <Text style={[GlobalStyle.CustomFontBody]}>{faculty}</Text>
              </View>
              <View style={styles.detail}>
                <Text style={GlobalStyle.CustomFontBig}>Day of birth: </Text>
                <Text style={[GlobalStyle.CustomFontBody]}>{DOB}</Text>
              </View>
              <View style={styles.detail}>
                <Text style={GlobalStyle.CustomFontBig}>Class: </Text>
                <Text style={[GlobalStyle.CustomFontBody]}>{_class}</Text>
              </View>
              <View style={styles.detail}>
                <Text style={GlobalStyle.CustomFontBig}>Phone: </Text>
                <Text style={[GlobalStyle.CustomFontBody]}>0{phone}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Profile;
