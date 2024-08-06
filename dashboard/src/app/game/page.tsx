
"use client"

import React from "react";
import FormElements from "@/components/FormElements";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { getDatabase,ref,onValue ,limitToFirst , equalTo,orderByChild,orderByValue, set ,update, query,limitToLast} from "firebase/database";
import Link from "next/link";


const Game=()=>
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
                <th scope="col" className="px-6 py-3">
                   Action
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

               <td className="px-6 py-4">
               <Link href={"/game/start?mid="+m.mName} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">دخول المباراة</Link>
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
    export default Game;