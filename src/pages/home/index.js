import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import storage from '../../database/storage';
import {Icon} from '../../component/index';
import moment from 'dayjs';
import {styles} from './style';

function Card(props) {
  const [status, setStatus] = useState(false);
  const {item} = props?.item;
  return (
    <View style={styles.cardFlex}>
      <View style={styles.cardTopFlex}>
        <Text style={styles.cardTime}>{item?.time}</Text>
        <View style={styles.statusFlex}>
          {item?.status?.map((e, index) => {
            return e ? (
              <Icon
                name={e}
                size={16}
                style={index === 0 ? styles.iconFlex : ''}
              />
            ) : (
              ''
            );
          })}
        </View>
        <TouchableWithoutFeedback onPress={() => setStatus(!status)}>
          <View style={styles.iconSelectFlex}>
            <Icon
              name={!status ? 'icon-a-shoucangweidianji' : 'icon-shoucang1'}
              size={30}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.cardContentText}>
        <Text style={styles.cardText} numberOfLines={2}>
          {item?.content}
        </Text>
      </View>
      <View style={styles.tagFlex}>
        <Text style={styles.tagText}>——感悟笔记</Text>
      </View>
    </View>
  );
}

function Home({navigation}) {
  const [list, setList] = useState([]);
  const deleteFunc = data => {
    const id = data?.item?.id;
    const newList = list.filter(e => e?.id !== id);
    setList(newList);
    storage.remove({
      key: 'recordData',
      id: id,
    });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // 获取某个key下的所有数据(仅key-id数据)
      storage.getAllDataForKey('recordData').then(res => {
        setList(res);
      });
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>
            {moment(new Date().valueOf()).format('YYYY.MM.DD')}
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.push('SelectStatus')}>
          <View style={styles.addIconFlex}>
            <Icon name="icon-tianjia" size={22} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.contentFlex}>
        <SwipeListView
          useFlatList
          data={list}
          renderItem={item => {
            return <Card item={item} />;
          }}
          swipeToOpenPercent={20}
          disableRightSwipe
          renderHiddenItem={(data, rowMap) => (
            <TouchableWithoutFeedback onPress={() => deleteFunc(data)}>
              <View style={styles.rowBack}>
                <Text style={styles.deleteText}>删除</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          rightOpenValue={-75}
        />
      </View>
      <View style={styles.footerDesc}>
        <Text>点击右上角添加按钮 开始写你的感悟吧</Text>
      </View>
    </View>
  );
}

export default Home;
