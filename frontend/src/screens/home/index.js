import React, { useState, useEffect } from 'react';
import  {normalizeDataTable} from '../../../tools/normalize';
import Layout from '../../components/layout';
import TableApp from '../../components/table';

import { get } from '../../service/trees';


export default function Home({navigation}) {
    const treeDataHeader = [
         'created_at',
         'tree_id',
         'block_id'
     ];

    const [treeDataList, setTreeDataList] = useState([]);

    useEffect( async () => {
        const dataTree = await get();
        const dataNormalize = await normalizeDataTable(dataTree?.docs, treeDataHeader);
        setTreeDataList(dataNormalize);
       
    }, []);

    const goToDetails = (objectData)=>{
        navigation.navigate('Details', objectData);
    }
    
    return (
        <Layout>
            <TableApp header={treeDataHeader} body={treeDataList} onpress={goToDetails} />
        </Layout>
    );
};

