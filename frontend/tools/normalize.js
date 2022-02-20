export async function normalizeDataTable(dataBody, dataHeader) {
   const list = [];

   for (let i = 0; i < dataBody.length; i += 1) {
      const listRow = [];

      for (let k = 0; k < dataHeader.length; k += 1) {
         listRow.push(
            dataBody[i][dataHeader[k]] || ''
         );
      }

     // listRow.push({ hiddenData: dataBody[i] });

      list.push(listRow);
   }

   return list;
}
