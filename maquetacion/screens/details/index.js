import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import styles from './style';
import Gallery from './gallery';


export default class Deatils  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        'id:',
        'created_at',
        'Tree_id',
        'Block_id',
        'The_geom',
        'Tree_dbh',
        'Stump_diam',
        'Curb_loc',
        'Status',
        'Health',
        'Spc_latin',
        'Spc_common',
        'Steward',
        'Guards',
        'Sidewalk',
        'User_type',
        'Problems',
        'Root_stone',
        'Root_grate',
        'Root_other',
        'Trnk_wire',
        'Trnk_light',
        'Trnk_other',
        'Brnch_ligh',
        'Brnch_shoe',
        'Brnch_other',
        'Address',
        'Zipcode',
        'Zip_city',
        'Cb_num',
        'Borocode',
        'Boroname',
        'Cncldist',
        'St_assem',
        'St_senate',
        'Nta',
        'Nta_name',
        'Boro_ct',
        'State',
        'Latitude',
        'Longitude',
        'x_sp',
        'y_sp'


      ],
      widthArr: [
        '618ad5aaffcafcea2fc9fac6',
        '200540',
        '315986',
        '09/03/2015',
        '21',
        '0',
        'OnCurb',
        'Alive',
        'Fair',
        'Quercus palustris',
        'pin oak',
        'None',
        'None',
        'Damage',
        'TreesCount Staff',
        'Stones',
        'Yes',
        'No',
        'No',
        'No',
        'No',
        'No',
        'No',
        'No',
        'No',
        '147-074 7 AVENUE',
        '11357',
        'Whitestone',
        '407',
        '4',
        'Queens',
        '19',
        '27',
        '11',
        'QN49',
        'Whitestone',
        '4097300',
        'New York',
        '40.79411067',
        '-73.81867946',
        '1034455.701',
        '228644.8374',

      ]
    }
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 44; i += 1) {
      const rowData = [];
      for (let j = 0; j < 2; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (

      <View style={styles.container}>
              <ScrollView horizontal={true}>
          <View>

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

          </View>
          <Gallery/>
        </ScrollView>

      </View>
    
    )
  }
}

