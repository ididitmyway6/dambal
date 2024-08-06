
"use client"

import React from "react";
import FormElements from "@/components/FormElements";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { getDatabase,ref,onValue ,limitToFirst , equalTo,orderByChild,orderByValue, set ,update, query,limitToLast} from "firebase/database";
import { useSearchParams } from "next/navigation";
import {auth } from '../../../firebase';

const Start = ()=>
    {
        var i=0;
        const params = useSearchParams();
        var matchId = params.get("mid");
        const [sets,setSets] = useState<Array<string>>([]);
        var x = Array();
        const [setsOptions,setSetsOptions] = useState([]);
        const userId  = auth.currentUser?.uid;




        function fetchSetsOptions()
        {
            var xs=[];
            const db = getDatabase();
            const q = query( ref(db,"matches/"+matchId+"/setsOptions/sets"),limitToFirst(150));
            onValue(q,snapShot=>{
                
                setSetsOptions(snapShot.val());
            });
        }

        useEffect(()=>{
           // const db = getDatabase();
           // const q = query( ref(db,"matches/"+matchId+"/setsOptions/sets"),limitToFirst(150));
           // onValue(q,(snapshot)=>{
                
                 // snapshot.forEach((child)=>{
                 //  x.push( child.key);
                //  });
                // setSets(x);
          //  });
          fetchSetsOptions();
        },[]);
        return(
            <DefaultLayout>
                <div className="flex flex-row flex-wrap">
                {
                    
                    setsOptions.map((val)=>{
                    i++;
                       // alert(JSON.stringify(val));
                        console.log(val);
                      return( 
                        val.uid && val.uid==userId ? 
 <a href={"/game/viewset?setId="+i +"&mid="+matchId} style={{backgroundColor:"green" , color:"white"}} className="block max-w-sm p-6 bg-green border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> <p color="green" style={{textDecorationLine:"line-through",textDecorationColor:"green"}}>{i}</p></a>
                        : val.uid ?    <a href="#"  style={{backgroundColor:"red" , color:"white"}}  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> <p color="green" style={{textDecorationLine:"line-through",textDecorationColor:"red"}}>{i}</p></a>   
                     : <a href={"/game/getset?setId="+i+"&mid="+matchId} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> <p color="green" >{i}</p></a>
                    ) 
                    })
                }
                </div>
            </DefaultLayout>
        )
    }
    export default Start;