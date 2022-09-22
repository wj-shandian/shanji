import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, FlatList} from 'react-native';
import moment from 'dayjs';
import {Icon} from '../../component/index';
import {styles} from './style';

function IconMain(props) {
  const {active, item, setActive} = props;
  const {icon, name} = item;
  return (
    <TouchableWithoutFeedback onPress={() => setActive(icon)}>
      <View style={styles.iconContainer}>
        <View
          style={[
            styles.iconButtonFlex,
            active === icon && styles.activeBorder,
          ]}>
          <Icon name={icon} size={34} />
        </View>
        <Text style={styles.iconName}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const data = [
  {icon: 'icon-qingtian', name: '晴天'},
  {icon: 'icon-qingzhuanduoyun', name: '多云'},
  {icon: 'icon-yintian', name: '阴天'},
  {icon: 'icon-leiyu', name: '雷雨'},
  {icon: 'icon-xiaoyu', name: '小雨'},
  {icon: 'icon-dayu', name: '大雨'},
  {icon: 'icon-xiaoxue', name: '小雪'},
  {icon: 'icon-daxue', name: '大雪'},
  {icon: 'icon-taiyangshengqi', name: '日出'},
  {icon: 'icon-taiyangluoxia', name: '日落'},
  {icon: 'icon-yejianyouyu', name: '夜间有雨'},
  {icon: 'icon-yejianyouxue', name: '夜间有雪'},
  {icon: 'icon-yewan', name: '夜晚'},
  {icon: 'icon-yujiaxue', name: '雨夹雪'},
  {icon: 'icon-youwu', name: '雾霾'},
  {icon: 'icon-duoyunzhuanqing', name: '阴晴不定'},
];
export default function SelectStatus({route, navigation}) {
  const [active, setActive] = useState('');
  const goBack = () => {
    navigation.goBack();
  };
  const nextPage = () => {
    navigation.navigate('RecordInsights', {
      status: route?.params?.status,
      weather: active,
    });
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
          <Text style={styles.headerTime}>
            {moment(new Date().valueOf()).format('YYYY.MM.DD')}
          </Text>
          <TouchableWithoutFeedback onPress={nextPage}>
            <View style={styles.skipButton}>
              <Text style={styles.skipText}>跳过</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.statusContent}>
          <View>
            <Text style={styles.statusContentTitle}>
              今天的风是否依然喧嚣？
            </Text>
          </View>
          <View style={styles.iconFlex}>
            <FlatList
              data={data}
              numColumns={4}
              renderItem={item => {
                return (
                  <IconMain active={active} setActive={setActive} {...item} />
                );
              }}
              columnWrapperStyle={{justifyContent: 'space-between'}}
            />
          </View>
        </View>
      </View>
      <View style={styles.footerFlex}>
        <TouchableWithoutFeedback onPress={nextPage}>
          <View style={styles.footerButton}>
            <Text style={styles.nextText}>下一步</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
