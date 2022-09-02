import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Totals from '../../components/totals/Totals';
import styles from './styles';
import Details from '../../components/details/Details';

const listOfPayments = [
  {
    id: 1,
    date: '01/07/2022',
    memberId: 3876,
    amount: 700,
    disabled: false,
    selected: false,
  },
  {
    id: 2,
    date: '01/08/2022',
    memberId: 3876,
    amount: 900,
    disabled: true,
    selected: false,
  },
];

const Payment = () => {
  const [payments, setPayments] = useState(listOfPayments);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalDues, setTotalDues] = useState(0);
  const [switchValue, setSwitchValue] = useState(false);
  const handleSwitchChange = id => {
    let currentSelection = payments.filter(filter => filter.id === id)[0]
      .selected;
    let index = listOfPayments.findIndex(obj => obj.id === id);
    setPayments(prevState => [{...prevState, ...listOfPayments[index]}]);
  };

  return (
    <View>
      <View style={styles.totalsView}>
        <Totals price={`${totalDues} EGP`} text="Total dues" />
        <TouchableOpacity>
          <Totals style={{width: 80, height: 50}} price="pay" />
        </TouchableOpacity>
        <Totals price={`${totalPayment} EGP`} text="Total to pay" />
      </View>
      {listOfPayments.map(pay => (
        <Details
          key={pay.id}
          amount={pay.amount}
          date={pay.date}
          accountId={pay.memberId}
          switchValue={pay.selected}
          onSwitchChange={() => handleSwitchChange(pay.id)}
          disabled={pay.disabled}
        />
      ))}
    </View>
  );
};

export default Payment;
