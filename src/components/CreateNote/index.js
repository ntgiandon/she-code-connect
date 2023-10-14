import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import Icon, {Icons} from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';

function CreatNote({
  content,
  onChangeContent,
  onChangeTitle,
  title,
  pressBack,
  pressSave,
}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleView}>
        <TouchableOpacity onPress={pressBack}>
          <Icon
            type={Icons.FontAwesome5}
            name="chevron-left"
            style={styles.goBack}
          />
        </TouchableOpacity>
        <TextInput
          label="Title"
          value={title}
          onChangeText={onChangeTitle}
          style={styles.inputTitle}
        />
        <TouchableOpacity onPress={pressSave}>
          <Icon
            type={Icons.FontAwesome5}
            name="check-circle"
            style={styles.save}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        editable
        multiline
        numberOfLines={30}
        maxLength={100}
        value={content}
        onChangeText={onChangeContent}
        style={styles.inputText}
      />
    </View>
  );
}

export default CreatNote;
