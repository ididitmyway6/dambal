"use client"
import React, { useEffect, useState } from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getDatabase,ref,onValue ,limitToFirst, query} from "firebase/database";
 const metadata : Metadata={
    title:"Damble Game",
    description:"Online Dambal Game"
}

const Sets=()=>
    {

        const [sets,setSets] = useState<Array<string>>([]);
        var x = Array();
        useEffect(()=>{
            const db = getDatabase();
            const q = query( ref(db,"sets/sets"),limitToFirst(150));
            onValue(q,(snapshot)=>{
               // setSets(snapshot.key);
                  snapshot.forEach((child)=>{
                   x.push( child.key);
                  });
                 setSets(x);
            });
        },[]);
        return(
            <DefaultLayout>
                <div className="flex flex-row flex-wrap">
                {
                    sets.map((val)=>{
                        console.log(val);
                      return( 
                      
 <a href={"/admin/sets/cards?setId="+val} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{val}</h5>
</a>
                        
                       
                      ) 
                    })
                }
                </div>
            </DefaultLayout>
        )
    }
    export default Sets;