import React, {useContext, useState} from 'react';
import CreatNote from '../../components/CreateNote';
import addNote from '../../context/actions/note/addNote';
import {GlobalContext} from '../../context/Provider';

function index({navigation, route}) {
  const {title, organizer, id, desc} = route.params;
  const [newTitle, setNewTitle] = useState(title);
  const [content, setContent] = useState(desc);

  const {
    userState: {user},
    noteDispatch,
  } = useContext(GlobalContext);

  return (
    <CreatNote
      pressBack={() => navigation.navigate('NoteList')}
      title={newTitle}
      onChangeTitle={text => setNewTitle(text)}
      content={content}
      onChangeContent={text => setContent(text)}
      pressSave={() => {
        addNote({
          studentId: user.id,
          noteId: id,
          title: newTitle,
          content: content,
          organizer: organizer,
        })(noteDispatch);
        navigation.navigate('NoteList');
      }}
    />
  );
}

export default index;
