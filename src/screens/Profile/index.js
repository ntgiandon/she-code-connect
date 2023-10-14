import React, {useContext, useEffect} from 'react';
import {View} from 'react-native-animatable';
import Profile from '../../components/Profile';
import Loading from '../../components/common/Loading';
import {GlobalContext} from '../../context/Provider';
import getUser from '../../context/actions/profile/getUser';
import auth from '@react-native-firebase/auth';

const index = () => {
  const {
    userState: {user, loading},
  } = useContext(GlobalContext);
  const data = auth().currentUser;

  return (
    <View>
      {loading && <Loading />}
      <Profile
        studentId={user.idStudent}
        photoURL={data.photoURL}
        displayName={user.name}
        email={user.email}
        faculty={user.faculty}
        DOB={user.dob}
        _class={user._class}
        phone={user.phone}
      />
    </View>
  );
};

export default index;
