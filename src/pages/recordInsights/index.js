import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Modal,
} from 'react-native';
import moment from 'dayjs';
import {Icon} from '../../component/index';
import storage from '../../database/storage';
import {styles} from './style';

export default function RecordInsights({route, navigation}) {
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);
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
  const cancelFunc = () => {
    setVisible(false);
  };
  const confirmFunc = () => {
    navigation.goBack();
    setVisible(false);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (!visible && content && e?.data?.action?.type === 'GO_BACK') {
        e.preventDefault();
      }
      setVisible(true);
    });
    return unsubscribe;
  }, [navigation, visible, content]);
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
            {route?.params?.status || route?.params?.weather ? (
              <View style={styles.iconFlex}>
                {route?.params?.status ? (
                  <Icon
                    name={route?.params?.status}
                    size={22}
                    style={styles.iconRight}
                  />
                ) : null}
                <Icon name={route?.params?.weather} size={22} />
              </View>
            ) : null}
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
      <Modal transparent visible={visible}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View>
              <Text style={styles.modalTitle}>
                你的感悟还未保存，退出后将无法再次编辑，确认退出吗？
              </Text>
            </View>
            <View style={styles.operationFlex}>
              <TouchableWithoutFeedback onPress={cancelFunc}>
                <View style={styles.cancelFlex}>
                  <Text style={styles.cancelText}>取消</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={confirmFunc}>
                <View style={styles.confirmFlex}>
                  <Text style={styles.confirmText}>确定</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
