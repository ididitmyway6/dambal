"use client"

import React from "react";
import FormElements from "@/components/FormElements";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { getDatabase,ref,onValue ,limitToFirst , equalTo,orderByChild,orderByValue, set ,update, query,limitToLast} from "firebase/database";
import { useSearchParams } from "next/navigation";
import {auth } from '../../../firebase';

const GetSet = ()=>
    {
        const params = useSearchParams();
        var setId = params.get("setId");
        var matchId = params.get("mid");
        const[currentUser,setCurrentUser] = useState(null);
        const [currentGameDetails,setCurrentGameDetails] = useState(null);
        function getCurrentUser()
        {
            const db = getDatabase();
            const uid = auth.currentUser?.uid;
            const q = ref(db,"users/"+uid);
            onValue(q,snapshot=>{
              setCurrentUser(snapshot.val());
            });
        }


        function purchaseSet()
        {
            //set set uid in {/matches/matchId/setsOptions/setId}
            const db = getDatabase();
            if(currentUser.userPoints<currentGameDetails.mSetCost)
                {
                    alert("رصيدك لا يسمح");
                }
                else
                {
                    update(ref(db,"matches/"+matchId+"/setsOptions/sets/"+setId),{
                        uid: auth.currentUser?.uid
                    }).then(()=>{
                        // deduct points from current user
                        
                        const updatedPoints = currentUser.userPoints - currentGameDetails.mSetCost;
                        
                        update(ref(db,"users/"+auth.currentUser?.uid),{
                            userPoints : updatedPoints
                        }).then(()=>{
                            alert("تم شراء السيت بنجاح");
                        });
                    });
                }
            
        }

        function getCurrentGameDetalis()
        {
            const db = getDatabase();
            const q = ref(db,"/matches/"+matchId);
            onValue(q, snapshot=>{
               setCurrentGameDetails(snapshot.val());
            });
        }

        function getCurrentSetDetails()
        {

        }
        useEffect(()=>{
           alert(auth.currentUser?.uid);
            getCurrentUser();
            getCurrentGameDetalis();
        },[]);
        return (
            <DefaultLayout>
                {
                    currentUser?<div> عدد نقاطك الان : {currentUser.userPoints}</div> : <div>loading......</div>
                }

                {
                    currentGameDetails?<div> تكلفة السيت لهذه المباراة : {currentGameDetails.mSetCost}</div> : <div>loading......</div>
                }
                
                {
                  currentGameDetails?
                    currentGameDetails.setsOptions.sets[setId].uid ? 
                    <div>sold out ...</div> :  <button onClick={()=>{purchaseSet();}}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">شراء السيت</button> :
                     <div>loading .....</div>
                          
                }

            </DefaultLayout>
        )
    }
    export default GetSet;