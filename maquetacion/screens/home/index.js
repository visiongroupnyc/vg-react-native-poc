import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import HeaderHome from '../../components/headerhome';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['created_id', 'tree_id', 'block_id'],
      widthArr: ['25/12/2015', '326,265', '624,763']
    }
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 16; i += 1) {
      const rowData = [];
      for (let j = 0; j < 3; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (

      <View style={styles.container}>
        <HeaderHome/>
        <ScrollView horizontal={true}>
          <View>
            <TouchableOpacity>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#fff' }}>
                <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  {
                    tableData.map((rowData, index) => (
                      <Row
                        key={index}
                        data={rowData}
                        widthArr={state.widthArr}
                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                        textStyle={styles.text}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

