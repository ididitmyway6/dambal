"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import { getDatabase,ref,onValue ,limitToFirst , equalTo,orderByChild, set ,update, query} from "firebase/database";

const NewMatch = ()=>
    {

        const[matchName,setMatchName] = useState("");
        const[setCost,setSetCost]=useState(0);
        const[winningCounter,setWinningCounter] = useState(0);
        const[matchDate,setMatchDate]=useState("");
        const[matchTime,setMatchTime] = useState("");
        const[setsList,setSets] = useState([]);
        const[loading,setLoading] = useState(false);

        function cloneSets()
        {
            const db = getDatabase();
            const query = ref(db,"sets/");
            onValue(query,snapshot=>{
              
            });
        }

        function createNewMatch()
        {
            setLoading(true);
            const db = getDatabase();
            const q = query( ref(db,"sets/"),orderByChild("card1"),limitToFirst(150));
            onValue(q,snapshot=>{
                const ts = Date.parse(matchDate+" "+matchTime);
        
        set(ref(db,"matches/"+matchName),{
            mName:matchName,
            mSetCost:setCost,
            mWinningCounter:winningCounter,
            mDate:matchDate,
            mTime:matchTime,
            mTimestamp: ts,
            setsOptions:snapshot.val()
            
        }).then(()=>{
            setLoading(false);
            alert("Match created successfully ... ");
        });
            });
        }

        return(
            <DefaultLayout>
         
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="space-y-6" >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">اضافة مباراة جديدة</h5>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اسم او عنوان المباراة</label>
            <input onChange={(e)=>{setMatchName(e.target.value)}} type="text"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Match 1" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تكلفة السيت</label>
            <input  onChange={(e)=>{setSetCost(Number(e.target.value))}} type="text"  placeholder="ex : 5000" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عدد مرات الفوز</label>
            <input  onChange={(e)=>{setWinningCounter(Number(e.target.value))}} type="text"  placeholder="ex : 3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تاريخ المباراة</label>
            <input  onChange={(e)=>{setMatchDate(e.target.value.toString())}} type="date"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">وقت المباراة</label>
            <input  onChange={(e)=>{setMatchTime(e.target.value.toString())}} type="time"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
       <div className="flex flex-row space-x-2">
       <button onClick={()=>{createNewMatch();}}  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">انشاء المباراة</button>
       </div>
        
    </div>
</div>
        </DefaultLayout>
        )
    }
    export default NewMatch;