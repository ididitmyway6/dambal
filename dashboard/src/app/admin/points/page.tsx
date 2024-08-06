"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import { getDatabase,ref,onValue ,limitToFirst, query , equalTo,orderByChild, set ,update} from "firebase/database";


const Points=()=>
    {
        const [points,setPoints] = useState(0);
        const [currentPoints , setCurrentPoints] = useState(0);
        const [isLoading,setIsLoading]=useState(false);
        const [userPhone,setUserPhone] = useState("");
        const [adjustedPoints, setAdjustedPoints] = useState(0);



        function updatePoints(userKey:string,prevPoints:number,addedPoints:number,isDeduction:boolean = false){
            const db = getDatabase();
            if(isDeduction)
                {
                    update(ref(db,"users/"+userKey),{
                        userPoints:prevPoints - addedPoints
                       }).then(()=>{
                            alert("تم خصم عدد "+ adjustedPoints + "للمستخدم بنجاح");
                       });
                }
                else
                {
                    update(ref(db,"users/"+userKey),{
                        userPoints:prevPoints + addedPoints
                       }).then(()=>{
                            alert("تم اضافة عدد "+ adjustedPoints + "للمستخدم بنجاح");
                       });
                }

        }

        function deductPoints()
        {
            const db = getDatabase();
            const q = query(ref(db, 'users'),orderByChild("userEmail"),equalTo(userPhone));
            onValue(q,(snapshot)=>{
                 if(snapshot.size==0){
                    alert("لا يوجد مستخدم بهذا الرقم");
                 }else if(snapshot.size>1)
                    {
                        alert("خطأ , رقم الهاتف مخصص لاكتر من مستخدم"); 
                    }
                    else{
                        var upoints =0;
                       const userKey = Object.keys(snapshot.val())[0];
                       snapshot.forEach((ss)=>{
                         upoints = ss.val().userPoints;
                         updatePoints(userKey,upoints,adjustedPoints,true);
                        setCurrentPoints(upoints-adjustedPoints);
                       });
                     
                    }
               
                       
            },{
                onlyOnce:true
            });
                
        }

        function AddPoints()
        {
            const db = getDatabase();
            const q = query(ref(db, 'users'),orderByChild("userEmail"),equalTo(userPhone));
            onValue(q,(snapshot)=>{
                 if(snapshot.size==0){
                    alert("لا يوجد مستخدم بهذا الرقم");
                 }else if(snapshot.size>1)
                    {
                        alert("خطأ , رقم الهاتف مخصص لاكتر من مستخدم"); 
                    }
                    else{
                        var upoints =0;
                       const userKey = Object.keys(snapshot.val())[0];
                       snapshot.forEach((ss)=>{
                         upoints = ss.val().userPoints;
                         updatePoints(userKey,upoints,adjustedPoints);
                        setCurrentPoints(upoints+adjustedPoints);
                       });
                     
                    }
               
                       
            },{
                onlyOnce:true
            });
                
        }


        return(
            <DefaultLayout>
                

<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="space-y-6" >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Points to User </h5>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Phone Number</label>
            <input onChange={(e)=>{setUserPhone(e.target.value)}} type="text"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="01016515501" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Added or Deducted Points</label>
            <input value={adjustedPoints} onChange={(e)=>{setAdjustedPoints(Number(e.target.value))}} type="text"  placeholder="5000" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
       <div className="flex flex-row space-x-2">
       <button onClick={()=>{AddPoints();setAdjustedPoints(0);}}  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Points </button>
       <button  onClick={()=>{deductPoints();setAdjustedPoints(0);}}  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Deduct Points </button>
       </div>
        <div>
            <h3>Current Points : {currentPoints}</h3>
        </div>
    </div>
</div>

            </DefaultLayout>
        )
    }

    export default Points;