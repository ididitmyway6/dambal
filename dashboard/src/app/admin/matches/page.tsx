"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { getDatabase,ref,onValue ,limitToFirst , equalTo,orderByChild,orderByValue, set ,update, query,limitToLast} from "firebase/database";



const Matches = ()=>
    {

        const[matchesList,setMatchesList] = useState([]);

        function fetchMatchesList()
        {
            const db = getDatabase();
            const q =  query( ref(db,"matches/"),orderByChild("mTimestamp"),limitToLast(100));
            onValue(q,(snapshot)=>{
                var tempData= [];
             snapshot.forEach((val)=>{
                tempData.push(val.val());
              
             });
             setMatchesList(tempData.reverse());
            // alert(JSON.stringify(matchesList));
            });


        }

        useEffect(()=>{
            fetchMatchesList();
       
        },[matchesList]);
        return (
            <DefaultLayout>
                <div>
                <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Match name
                </th>
                <th scope="col" className="px-6 py-3">
                    Set Cost
                </th>
                <th scope="col" className="px-6 py-3">
                    Winning Counter
                </th>
                <th scope="col" className="px-6 py-3">
                    Date and Time
                </th>
            </tr>
        </thead>
        <tbody>
        
           {
          
          matchesList.map(m=>
          {
              return( 
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {m.mName} 
               </th>
               <td className="px-6 py-4">
                   {m.mSetCost}
               </td>
               <td className="px-6 py-4">
                   {m.mWinningCounter}
               </td>
               <td className="px-6 py-4">
                   {m.mDate + " " + m.mTime }
               </td>
               
           </tr>
              ) 
            }
       )
           
           }
      
        </tbody>
    </table>
    </div>
                </div>
            </DefaultLayout>
        )
    }

    export default Matches;