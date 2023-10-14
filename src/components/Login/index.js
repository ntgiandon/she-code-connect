import React from 'react';
import {View, ImageBackground, Platform, Text, Image} from 'react-native';

import SocialButton from '../common/SocialButton';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import GlobalStyle from '../../utils/GlobalStyle';
import Input from '../common/Input';
import colors from '../../assets/theme/colors';
import Message from '../common/Message';

const LoginComponent = ({googleLogin, loading, error}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/backgroundLogin.png')}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.containerInput}>
          {error?.error && <Message danger onDismiss message={error?.error} />}
          <Input label="Username" placeholder="Enter Username" />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={
              <FontAwesome
                name="eye"
                style={styles.icon}
                size={22}
                color={colors.black}
              />
            }
            iconPosition="right"
          />
        </View>
      </View>

      {Platform.OS === 'android' ? (
        <View style={styles.containerConnect}>
          <Text tyle={GlobalStyle.CustomFontBody}>
            ----------- or connect with -----------
          </Text>
          <View style={styles.button}>
            <SocialButton
              buttonTitle="Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={googleLogin}
              disabled={loading}
            />
          </View>
        </View>
      ) : null}
    </ImageBackground>
  );
};

export default LoginComponent;
