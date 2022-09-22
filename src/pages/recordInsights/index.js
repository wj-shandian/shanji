import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, TextInput} from 'react-native';
import moment from 'dayjs';
import {Icon} from '../../component/index';
import storage from '../../database/storage';
import {styles} from './style';

export default function RecordInsights({route, navigation}) {
  const [content, setContent] = useState('');
  const time = moment(new Date().valueOf()).format('YYYY.MM.DD');
  const goBack = () => {
    navigation.goBack();
  };
  const nextPage = async () => {
    const data = await storage.getIdsForKey('recordData');
    storage.save({
      key: 'recordData',
      id: Number(data[data?.length - 1] || 0) + 1,
      data: {
        time: time,
        status: [route?.params?.status ?? '', route?.params?.weather ?? ''],
        content: content,
        id: Number(data[data?.length - 1] || 0) + 1,
      },
      expires: null,
    });

    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.selectMainFlex}>
        <View style={styles.statusHeaderFlex}>
          <TouchableWithoutFeedback onPress={goBack}>
            <View>
              <Icon name="icon-fanhui" size={18} color="#000000" />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.headerTime}>{time}</Text>
          <TouchableWithoutFeedback onPress={nextPage}>
            <View style={styles.skipButton}>
              <Text style={styles.skipText}>保存</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.inputFlex}>
          <View style={styles.inputBackground}>
            <View style={styles.iconFlex}>
              <Icon
                name={route?.params?.status}
                size={22}
                style={styles.iconRight}
              />
              <Icon name={route?.params?.weather} size={22} />
            </View>
            <View>
              <TextInput
                multiline
                onChangeText={text => setContent(text)}
                style={styles.inputHeight}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
