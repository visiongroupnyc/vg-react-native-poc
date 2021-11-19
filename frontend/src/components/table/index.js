import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Table, Row, Rows} from 'react-native-table-component';
import { TableWrapper, Cell } from 'react-native-table-component';

import styles from './style';

const TableApp = ({ header = [], body = [], onpress }) => {
  const { container, head, row, textRow, textHeader } = styles;
  const element = (text, objectData) => {
    console.log(text, 'textdata')
    return (
      <TouchableOpacity onPress={() => onpress(objectData)}>
        
          <Text>{text}</Text>
        
      </TouchableOpacity>
    )
  }

  return (
    <View style={container}>
      <ScrollView>
        <Table >
          <Row data={header} style={head} textStyle={textHeader} />
          <Rows data={body} style={row} textStyle={textRow} />
          {body?.map((rowData, index) => {
           // const objectData = rowData[rowData.length-1]?.hiddenData ? rowData.pop() : null;
           const newRowData = [...rowData];
            const objectData = rowData[rowData.length-1]?.hiddenData ? rowData[rowData.length-1] : null;
            //const onlyObjectData =objectData?.hiddenData ? [...rowData].splice(-1) : rowData;
            if(objectData?.hiddenData){
              newRowData.pop();
            }
            console.log(newRowData, '##newobject')
            return (
              <TableWrapper key={index} style={row}>
                {newRowData?.map((celldata, indexcel) => (

                  <Cell key={`${indexcel}-cell`} data={element(celldata)} textStyle={textRow} />
                )
                )
                }
              </TableWrapper>
            )
          }
          )}


        </Table>
      </ScrollView>
    </View>
  );
};

export default TableApp;
