import * as React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import styles from './styles';
import Icon, {Icons} from '../Icon';
import CustomButton from '../CustomButton';

const EventCard = ({
  eventName,
  organizer,
  guests,
  location,
  timeStart,
  _class,
  timeEnd,
  faculty,
  onPress,
  disabled,
}) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.title}>{eventName}</Title>
        <Card.Content>
          {organizer !== '' && (
            <Paragraph style={styles.fontCustom}>
              <Icon
                type={Icons.FontAwesome5}
                name="user"
                style={styles.icons}
              />
              {'  '}
              {organizer}
            </Paragraph>
          )}
          {_class === 'All' && faculty === 'All' && (
            <Paragraph style={styles.fontCustom}>
              <Icon
                type={Icons.FontAwesome5}
                name="users"
                style={styles.icons}
              />{' '}
              Sinh viên
            </Paragraph>
          )}

          {_class === 'All' && faculty !== 'All' && (
            <Paragraph style={styles.fontCustom}>
              <Icon
                type={Icons.FontAwesome5}
                name="users"
                style={styles.icons}
              />{' '}
              Sinh viên {faculty}
            </Paragraph>
          )}

          {_class !== 'All' && faculty === 'All' && (
            <Paragraph style={styles.fontCustom}>
              <Icon
                type={Icons.FontAwesome5}
                name="users"
                style={styles.icons}
              />{' '}
              Sinh viên {_class}
            </Paragraph>
          )}

          {_class !== 'All' && faculty !== 'All' && (
            <Paragraph style={styles.fontCustom}>
              <Icon
                type={Icons.FontAwesome5}
                name="users"
                style={styles.icons}
              />{' '}
              {_class}, {faculty}
            </Paragraph>
          )}

          {location !== '' && (
            <Paragraph style={styles.fontCustom}>
              <Icon
                type={Icons.FontAwesome5}
                name="location-arrow"
                style={styles.icons}
              />
              {'  '}
              {location}
            </Paragraph>
          )}

          {guests !== '' && (
            <Paragraph style={styles.fontCustom}>
              <Icon
                type={Icons.FontAwesome5}
                name="star"
                style={styles.icons}
              />
              {'  '}
              {guests}
            </Paragraph>
          )}

          {timeStart !== '' && (
            <Paragraph style={styles.time}>
              <Icon
                type={Icons.FontAwesome5}
                name="clock"
                style={styles.icons}
              />
              {'  '}
              {timeStart} - {timeEnd}
            </Paragraph>
          )}
        </Card.Content>
      </Card.Content>
      <Card.Actions style={styles.containerButton}>
        <CustomButton
          title="SAVE"
          accent
          style={styles.buttonSave}
          onPress={onPress}
          disabled={disabled}
        />
      </Card.Actions>
    </Card>
  );
};

export default React.memo(EventCard);
