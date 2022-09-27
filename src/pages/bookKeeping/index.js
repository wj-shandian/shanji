import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../component/index';
import {styles} from './style';

export default function BookKeep() {
  return (
    <View style={styles.bookKeepFlex}>
      <View style={styles.headerFlex}>
        <Text style={styles.headerTitle}>闪记记账</Text>
        <View style={styles.headerIcon}>
          <Icon name="icon-jizhangben" size={24} color="#fff" />
        </View>
      </View>
      <View style={styles.incomeListFlex}>
        <View>
          <View>
            <Text style={styles.yearText}>2022</Text>
          </View>
          <View style={styles.dateFlex}>
            <Text style={styles.dateText}>09月</Text>
            <Icon name="icon-xiala" size={18} color="#fff" />
          </View>
        </View>
        <View>
          <Text style={styles.labelTitle}>总收入</Text>
          <Text style={styles.valuePrice}>0.00</Text>
        </View>
        <View>
          <Text style={styles.labelTitle}>总支出</Text>
          <Text style={styles.valuePrice}>0.00</Text>
        </View>

        <View style={styles.headerFooterFlex}>
          <View style={styles.footerLabelFlex}>
            <Icon name="icon-yusuan" size={26} />
            <Text style={styles.footerLabelText}>预算</Text>
          </View>
          <View style={styles.footerLabelFlex}>
            <Icon name="icon-zichan" size={20} />
            <Text style={styles.footerLabelText}>资产</Text>
          </View>
          <View style={styles.footerLabelFlex}>
            <Icon name="icon-fenpeijihua" size={22} />
            <Text style={styles.footerLabelText}>分配计划</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
