/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import OrderItem from '../components/OrderItem';
import FetchRequest from '../commons/FetchRequest';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([
    {
      title: 'Новые',
      data: [],
    },
    {
      title: 'Завершенные',
      data: [],
    },
    {
      title: 'Отмененные',
      data: [],
    },
  ]);
  const [companies, setCompanies] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FetchRequest({action: 'list-company'})
      .then((result) => {
        const newData = JSON.parse(JSON.stringify(data));
        data.map((item, index) => {
          Object.keys(result.model).map((item) => {
            const state = result.model[item].state;
            if (index === state) {
              newData[index].data.push(result.model[item]);
            }
          });
        });
        setData(newData);
        setCompanies(result.company);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const onOrderPress = (company, id) => {
    setLoading(true);
    FetchRequest({
      action: 'card',
      card: id,
    }).then((res) => {
      setLoading(false);
      navigation.navigate('Status', {
        order: res,
        company,
      });
    });
  };

  return (
    <View style={styles.wrapper}>
      <Spinner
        visible={loading}
        textContent={'Загрузка...'}
        textStyle={styles.spinnerTextStyle}
      />
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled={false}
        renderItem={({item}) => (
          <OrderItem
            onOrderPress={onOrderPress}
            item={companies[item.company]}
            order={item}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
  },
  wrapper: {
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4C4C4C',
    marginBottom: 15,
  },
});

export default HomeScreen;
