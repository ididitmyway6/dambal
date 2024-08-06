"use client"
import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getDatabase , ref,onValue , set } from "firebase/database";
 const metadata : Metadata={
    title:"Damble Game",
    description:"Online Dambal Game"
}

const Newset=()=>
    {
        const db = getDatabase();
        const query = ref(db,"sets/");
        onValue(query,(snapshot)=>{
           if(snapshot.size==0){
            set(ref(db,"sets/1/"),{
                card1:{
                    a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                    b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                    c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
                } ,
                card2:{
                    a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                    b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                    c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
                } , 
                card3:{
                    a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                    b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                    c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
                } ,
                card4:{
                    a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                    b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                    c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
                } ,
                card5:{
                    a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                    b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                    c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
                } ,
                card6:{
                    a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                    b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                    c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
                } 
            });
           }else{
           const sets_count =  snapshot.size;
           set(ref(db,"sets/"+(sets_count+1).toString()),{
            card1:{
                a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
            } ,
            card2:{
                a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
            } , 
            card3:{
                a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
            } ,
            card4:{
                a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
            } ,
            card5:{
                a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
            } ,
            card6:{
                a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",
                b1:"",b2:"",b3:"",b4:"",b5:"",b6:"",b7:"",b8:"",b9:"",
                c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
            } 
        });
           }
        });
        return(
            <DefaultLayout>
                <h1>Welcome to our game ...</h1>
            </DefaultLayout>
        )
    }
    export default Newset;