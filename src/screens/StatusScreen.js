import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {WIDTH} from '../commons/Constants';
import InfoItem from '../components/InfoItem';

const StatusScreen = ({navigation, route}) => {
  const order = route?.params?.order?.model;
  const company = route?.params?.company;
  return (
    <ScrollView style={styles.orderWrapper}>
      <View style={styles.order}>
        <View style={styles.orderTitle}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/images/back.png')}
              style={{width: 16, height: 16}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Информация о заказе</Text>
          <View style={styles.uselessView} />
        </View>
        <View>
          <InfoItem name="Наименование компании" info={company.name} />
          <InfoItem name="Должность" info={order.job} />
          <InfoItem name="ФИО" info={order.user} />
          <InfoItem name="Номер телефона" info={order.phone} />
          <InfoItem name="Адрес" info={company.addr} />
          <InfoItem name="Оператор" info={order.operator} />
          <InfoItem name="Дата начала работ" info={order.date} />
          <InfoItem name="Плановое время начала заказа" info={order.from} />
          <InfoItem name="Плановое время окончания заказа" info={order.to} />
          <InfoItem
            name="Форма оплаты"
            info={order.pay === 0 ? 'Наличные' : 'Картой'}
          />
          <InfoItem name="Цена часа работы" info={order.summ + '/час'} />
          <InfoItem name="Расстояние до объекта" info={order.dist + ' км'} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  orderWrapper: {
    padding: 15,
    marginBottom: 15,
  },
  order: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  orderTitle: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  backButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  uselessView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default StatusScreen;
