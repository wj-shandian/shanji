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
  {icon: 'icon-kaixin', name: '开心'},
  {icon: 'icon-yukuai', name: '愉悦'},
  {icon: 'icon-keai', name: '向往'},
  {icon: 'icon-weixiao', name: '微笑'},
  {icon: 'icon-jiaxiao', name: '假笑'},
  {icon: 'icon-xiaoku', name: '哭笑'},
  {icon: 'icon-deyi', name: '得意'},
  {icon: 'icon-gaxiao', name: '尬笑'},
  {icon: 'icon-bishi', name: '鄙视'},
  {icon: 'icon-bizui', name: '闭嘴'},
  {icon: 'icon-daku', name: '大哭'},
  {icon: 'icon-nanshou', name: '难受'},
  {icon: 'icon-nanguo', name: '伤心'},
  {icon: 'icon-xiudaliao', name: '糗大了'},
  {icon: 'icon-liuhan', name: '无语'},
  {icon: 'icon-bulini', name: '简直了'},
];

export default function SelectStatus({navigation}) {
  const [active, setActive] = useState('');
  const goBack = () => {
    navigation.goBack();
  };
  const nextPage = () => {
    navigation.navigate('Weather', {
      status: active,
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
            <Text style={styles.statusContentTitle}>心境如何？</Text>
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
