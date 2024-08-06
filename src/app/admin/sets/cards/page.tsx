"use client"
import React, { useEffect, useState } from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getDatabase,ref,onValue ,limitToFirst, query,set,update} from "firebase/database";
import { useSearchParams } from "next/navigation";
const Cards = ()=>
    {
        const params = useSearchParams();
        var setId = params.get("setId");
        const [game_cards,setGameCards] = useState<Object[]>([]);
        const [isLoading,setIsLoading] = useState(false);
        //Card1------------------------------------------------------------------------------------------------
        const [a1Card1,setA1Card1] = useState("");
        const [a2Card1,setA2Card1] = useState("");
        const [a3Card1,setA3Card1] = useState("");
        const [a4Card1,setA4Card1] = useState("");
        const [a5Card1,setA5Card1] = useState("");
        const [a6Card1,setA6Card1] = useState("");
        const [a7Card1,setA7Card1] = useState("");
        const [a8Card1,setA8Card1] = useState("");
        const [a9Card1,setA9Card1] = useState("");
        const [b1Card1,setB1Card1] = useState("");
        const [b2Card1,setB2Card1] = useState("");
        const [b3Card1,setB3Card1] = useState("");
        const [b4Card1,setB4Card1] = useState("");
        const [b5Card1,setB5Card1] = useState("");
        const [b6Card1,setB6Card1] = useState("");
        const [b7Card1,setB7Card1] = useState("");
        const [b8Card1,setB8Card1] = useState("");
        const [b9Card1,setB9Card1] = useState("");
        const [c1Card1,setC1Card1] = useState("");
        const [c2Card1,setC2Card1] = useState("");
        const [c3Card1,setC3Card1] = useState("");
        const [c4Card1,setC4Card1] = useState("");
        const [c5Card1,setC5Card1] = useState("");
        const [c6Card1,setC6Card1] = useState("");
        const [c7Card1,setC7Card1] = useState("");
        const [c8Card1,setC8Card1] = useState("");
        const [c9Card1,setC9Card1] = useState("");

           //Card2------------------------------------------------------------------------------------------------
           const [a1Card2,setA1Card2] = useState("");
           const [a2Card2,setA2Card2] = useState("");
           const [a3Card2,setA3Card2] = useState("");
           const [a4Card2,setA4Card2] = useState("");
           const [a5Card2,setA5Card2] = useState("");
           const [a6Card2,setA6Card2] = useState("");
           const [a7Card2,setA7Card2] = useState("");
           const [a8Card2,setA8Card2] = useState("");
           const [a9Card2,setA9Card2] = useState("");
           const [b1Card2,setB1Card2] = useState("");
           const [b2Card2,setB2Card2] = useState("");
           const [b3Card2,setB3Card2] = useState("");
           const [b4Card2,setB4Card2] = useState("");
           const [b5Card2,setB5Card2] = useState("");
           const [b6Card2,setB6Card2] = useState("");
           const [b7Card2,setB7Card2] = useState("");
           const [b8Card2,setB8Card2] = useState("");
           const [b9Card2,setB9Card2] = useState("");
           const [c1Card2,setC1Card2] = useState("");
           const [c2Card2,setC2Card2] = useState("");
           const [c3Card2,setC3Card2] = useState("");
           const [c4Card2,setC4Card2] = useState("");
           const [c5Card2,setC5Card2] = useState("");
           const [c6Card2,setC6Card2] = useState("");
           const [c7Card2,setC7Card2] = useState("");
           const [c8Card2,setC8Card2] = useState("");
           const [c9Card2,setC9Card2] = useState("");
                      //Card3------------------------------------------------------------------------------------------------
                      const [a1Card3,setA1Card3] = useState("");
                      const [a2Card3,setA2Card3] = useState("");
                      const [a3Card3,setA3Card3] = useState("");
                      const [a4Card3,setA4Card3] = useState("");
                      const [a5Card3,setA5Card3] = useState("");
                      const [a6Card3,setA6Card3] = useState("");
                      const [a7Card3,setA7Card3] = useState("");
                      const [a8Card3,setA8Card3] = useState("");
                      const [a9Card3,setA9Card3] = useState("");
                      const [b1Card3,setB1Card3] = useState("");
                      const [b2Card3,setB2Card3] = useState("");
                      const [b3Card3,setB3Card3] = useState("");
                      const [b4Card3,setB4Card3] = useState("");
                      const [b5Card3,setB5Card3] = useState("");
                      const [b6Card3,setB6Card3] = useState("");
                      const [b7Card3,setB7Card3] = useState("");
                      const [b8Card3,setB8Card3] = useState("");
                      const [b9Card3,setB9Card3] = useState("");
                      const [c1Card3,setC1Card3] = useState("");
                      const [c2Card3,setC2Card3] = useState("");
                      const [c3Card3,setC3Card3] = useState("");
                      const [c4Card3,setC4Card3] = useState("");
                      const [c5Card3,setC5Card3] = useState("");
                      const [c6Card3,setC6Card3] = useState("");
                      const [c7Card3,setC7Card3] = useState("");
                      const [c8Card3,setC8Card3] = useState("");
                      const [c9Card3,setC9Card3] = useState("");
                                            //Card4------------------------------------------------------------------------------------------------
                                            const [a1Card4,setA1Card4] = useState("");
                                            const [a2Card4,setA2Card4] = useState("");
                                            const [a3Card4,setA3Card4] = useState("");
                                            const [a4Card4,setA4Card4] = useState("");
                                            const [a5Card4,setA5Card4] = useState("");
                                            const [a6Card4,setA6Card4] = useState("");
                                            const [a7Card4,setA7Card4] = useState("");
                                            const [a8Card4,setA8Card4] = useState("");
                                            const [a9Card4,setA9Card4] = useState("");
                                            const [b1Card4,setB1Card4] = useState("");
                                            const [b2Card4,setB2Card4] = useState("");
                                            const [b3Card4,setB3Card4] = useState("");
                                            const [b4Card4,setB4Card4] = useState("");
                                            const [b5Card4,setB5Card4] = useState("");
                                            const [b6Card4,setB6Card4] = useState("");
                                            const [b7Card4,setB7Card4] = useState("");
                                            const [b8Card4,setB8Card4] = useState("");
                                            const [b9Card4,setB9Card4] = useState("");
                                            const [c1Card4,setC1Card4] = useState("");
                                            const [c2Card4,setC2Card4] = useState("");
                                            const [c3Card4,setC3Card4] = useState("");
                                            const [c4Card4,setC4Card4] = useState("");
                                            const [c5Card4,setC5Card4] = useState("");
                                            const [c6Card4,setC6Card4] = useState("");
                                            const [c7Card4,setC7Card4] = useState("");
                                            const [c8Card4,setC8Card4] = useState("");
                                            const [c9Card4,setC9Card4] = useState("");
                                                                                        //Card5------------------------------------------------------------------------------------------------
                                                                                        const [a1Card5,setA1Card5] = useState("");
                                                                                        const [a2Card5,setA2Card5] = useState("");
                                                                                        const [a3Card5,setA3Card5] = useState("");
                                                                                        const [a4Card5,setA4Card5] = useState("");
                                                                                        const [a5Card5,setA5Card5] = useState("");
                                                                                        const [a6Card5,setA6Card5] = useState("");
                                                                                        const [a7Card5,setA7Card5] = useState("");
                                                                                        const [a8Card5,setA8Card5] = useState("");
                                                                                        const [a9Card5,setA9Card5] = useState("");
                                                                                        const [b1Card5,setB1Card5] = useState("");
                                                                                        const [b2Card5,setB2Card5] = useState("");
                                                                                        const [b3Card5,setB3Card5] = useState("");
                                                                                        const [b4Card5,setB4Card5] = useState("");
                                                                                        const [b5Card5,setB5Card5] = useState("");
                                                                                        const [b6Card5,setB6Card5] = useState("");
                                                                                        const [b7Card5,setB7Card5] = useState("");
                                                                                        const [b8Card5,setB8Card5] = useState("");
                                                                                        const [b9Card5,setB9Card5] = useState("");
                                                                                        const [c1Card5,setC1Card5] = useState("");
                                                                                        const [c2Card5,setC2Card5] = useState("");
                                                                                        const [c3Card5,setC3Card5] = useState("");
                                                                                        const [c4Card5,setC4Card5] = useState("");
                                                                                        const [c5Card5,setC5Card5] = useState("");
                                                                                        const [c6Card5,setC6Card5] = useState("");
                                                                                        const [c7Card5,setC7Card5] = useState("");
                                                                                        const [c8Card5,setC8Card5] = useState("");
                                                                                        const [c9Card5,setC9Card5] = useState("");
                                                                                                                                                                                //Card6------------------------------------------------------------------------------------------------
                                                                                                                                                                                const [a1Card6,setA1Card6] = useState("");
                                                                                                                                                                                const [a2Card6,setA2Card6] = useState("");
                                                                                                                                                                                const [a3Card6,setA3Card6] = useState("");
                                                                                                                                                                                const [a4Card6,setA4Card6] = useState("");
                                                                                                                                                                                const [a5Card6,setA5Card6] = useState("");
                                                                                                                                                                                const [a6Card6,setA6Card6] = useState("");
                                                                                                                                                                                const [a7Card6,setA7Card6] = useState("");
                                                                                                                                                                                const [a8Card6,setA8Card6] = useState("");
                                                                                                                                                                                const [a9Card6,setA9Card6] = useState("");
                                                                                                                                                                                const [b1Card6,setB1Card6] = useState("");
                                                                                                                                                                                const [b2Card6,setB2Card6] = useState("");
                                                                                                                                                                                const [b3Card6,setB3Card6] = useState("");
                                                                                                                                                                                const [b4Card6,setB4Card6] = useState("");
                                                                                                                                                                                const [b5Card6,setB5Card6] = useState("");
                                                                                                                                                                                const [b6Card6,setB6Card6] = useState("");
                                                                                                                                                                                const [b7Card6,setB7Card6] = useState("");
                                                                                                                                                                                const [b8Card6,setB8Card6] = useState("");
                                                                                                                                                                                const [b9Card6,setB9Card6] = useState("");
                                                                                                                                                                                const [c1Card6,setC1Card6] = useState("");
                                                                                                                                                                                const [c2Card6,setC2Card6] = useState("");
                                                                                                                                                                                const [c3Card6,setC3Card6] = useState("");
                                                                                                                                                                                const [c4Card6,setC4Card6] = useState("");
                                                                                                                                                                                const [c5Card6,setC5Card6] = useState("");
                                                                                                                                                                                const [c6Card6,setC6Card6] = useState("");
                                                                                                                                                                                const [c7Card6,setC7Card6] = useState("");
                                                                                                                                                                                const [c8Card6,setC8Card6] = useState("");
                                                                                                                                                                                const [c9Card6,setC9Card6] = useState("");
        function loadCards ()
        {
            setIsLoading(true);
            const db = getDatabase();
            const query = ref(db,"sets/sets/"+setId);
           
            onValue(query,(snapshot)=>{
                setIsLoading(false);
                const fetchedCards =[];

                 if(snapshot)
                    {
                        const data=snapshot.val();
                        fetchedCards.push(data);
                        setGameCards(fetchedCards);
                    }
              
              
            });
        }


        function updateCard1()
        {
          
           try{
            const db = getDatabase();
            set(ref(db,"sets/sets/"+setId+"/card1/"),{
                a1:a1Card1,a2:a2Card1,a3:a3Card1,a4:a4Card1,a5:a5Card1,a6:a6Card1,a7:a7Card1,a8:a8Card1,a9:a9Card1,
                b1:b1Card1,b2:b2Card1,b3:b3Card1,b4:b4Card1,b5:b5Card1,b6:b6Card1,b7:b7Card1,b8:b8Card1,b9:b9Card1,
                c1:c1Card1,c2:c2Card1,c3:c3Card1,c4:c4Card1,c5:c5Card1,c6:c6Card1,c7:c7Card1,c8:c8Card1,c9:c9Card1,
            }).then(()=>{
                alert("Card1 fields set successfully.");
            }).catch((err)=>{alert(err);});
           }catch(exc){
            alert(exc);
           }

        }

        function updateCard2()
        {
          
           try{
            const db = getDatabase();
            set(ref(db,"sets/sets/"+setId+"/card2/"),{
                a1:a1Card2,a2:a2Card2,a3:a3Card2,a4:a4Card2,a5:a5Card2,a6:a6Card2,a7:a7Card2,a8:a8Card2,a9:a9Card2,
                b1:b1Card2,b2:b2Card2,b3:b3Card2,b4:b4Card2,b5:b5Card2,b6:b6Card2,b7:b7Card2,b8:b8Card2,b9:b9Card2,
                c1:c1Card2,c2:c2Card2,c3:c3Card2,c4:c4Card2,c5:c5Card2,c6:c6Card2,c7:c7Card2,c8:c8Card2,c9:c9Card2,
            }).then(()=>{
                alert("Card2 fields set successfully.");
            }).catch((err)=>{alert(err);});
           }catch(exc){
            alert(exc);
           }

        }

        function updateCard3()
        {
          
           try{
            const db = getDatabase();
            set(ref(db,"sets/sets/"+setId+"/card3/"),{
                a1:a1Card3,a2:a2Card3,a3:a3Card3,a4:a4Card3,a5:a5Card3,a6:a6Card3,a7:a7Card3,a8:a8Card3,a9:a9Card3,
                b1:b1Card3,b2:b2Card3,b3:b3Card3,b4:b4Card3,b5:b5Card3,b6:b6Card3,b7:b7Card3,b8:b8Card3,b9:b9Card3,
                c1:c1Card3,c2:c2Card3,c3:c3Card3,c4:c4Card3,c5:c5Card3,c6:c6Card3,c7:c7Card3,c8:c8Card3,c9:c9Card3,
            }).then(()=>{
                alert("Card3 fields set successfully.");
            }).catch((err)=>{alert(err);});
           }catch(exc){
            alert(exc);
           }

        }



        
        function updateCard4()
        {
          
           try{
            const db = getDatabase();
            set(ref(db,"sets/sets/"+setId+"/card4/"),{
                a1:a1Card4,a2:a2Card4,a3:a3Card4,a4:a4Card4,a5:a5Card4,a6:a6Card4,a7:a7Card4,a8:a8Card4,a9:a9Card4,
                b1:b1Card4,b2:b2Card4,b3:b3Card4,b4:b4Card4,b5:b5Card4,b6:b6Card4,b7:b7Card4,b8:b8Card4,b9:b9Card4,
                c1:c1Card4,c2:c2Card4,c3:c3Card4,c4:c4Card4,c5:c5Card4,c6:c6Card4,c7:c7Card4,c8:c8Card4,c9:c9Card4,
            }).then(()=>{
                alert("Card4 fields set successfully.");
            }).catch((err)=>{alert(err);});
           }catch(exc){
            alert(exc);
           }

        }

                
        function updateCard5()
        {
          
           try{
            const db = getDatabase();
            set(ref(db,"sets/sets/"+setId+"/card5/"),{
                a1:a1Card5,a2:a2Card5,a3:a3Card5,a4:a4Card5,a5:a5Card5,a6:a6Card5,a7:a7Card5,a8:a8Card5,a9:a9Card5,
                b1:b1Card5,b2:b2Card5,b3:b3Card5,b4:b4Card5,b5:b5Card5,b6:b6Card5,b7:b7Card5,b8:b8Card5,b9:b9Card5,
                c1:c1Card5,c2:c2Card5,c3:c3Card5,c4:c4Card5,c5:c5Card5,c6:c6Card5,c7:c7Card5,c8:c8Card5,c9:c9Card5,
            }).then(()=>{
                alert("Card5 fields set successfully.");
            }).catch((err)=>{alert(err);});
           }catch(exc){
            alert(exc);
           }

        }



        function updateCard6()
        {
          
           try{
            const db = getDatabase();
            set(ref(db,"sets/sets/"+setId+"/card6/"),{
                a1:a1Card6,a2:a2Card6,a3:a3Card6,a4:a4Card6,a5:a5Card6,a6:a6Card6,a7:a7Card6,a8:a8Card6,a9:a9Card6,
                b1:b1Card6,b2:b2Card6,b3:b3Card6,b4:b4Card6,b5:b5Card6,b6:b6Card6,b7:b7Card6,b8:b8Card6,b9:b9Card6,
                c1:c1Card6,c2:c2Card6,c3:c3Card6,c4:c4Card6,c5:c5Card6,c6:c6Card6,c7:c7Card6,c8:c8Card6,c9:c9Card6,
            }).then(()=>{
                alert("Card6 fields set successfully.");
            }).catch((err)=>{alert(err);});
           }catch(exc){
            alert(exc);
           }

        }

        useEffect( ()=>{
           loadCards();
          // if(game_cards.length>0)
       // alert(game_cards[0].card1.a1);
        },[]);

        
        return(
            <DefaultLayout>
                <div>
                    <h3>رقم السيت : {setId}</h3>
                    {
                      isLoading ? 
                      "Loading Cards"
                      
                      : game_cards.length>0?(
                        <div style={{padding:10}} className="flex flex-row flex-wrap space-x-4 space-y-4">

<div className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<table style={{maxWidth:300,width:300}}  className="border-collapse border border-slate-500 table-auto">
<tbody>
<tr>
   <td className="border border-slate-500"><input onChange={(e)=>{setA1Card1(e.target.value)}} name="a1" id="a1" width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.a1}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setA2Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.a2}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setA3Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.a3}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setA4Card1(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card1.a4}/></td>
   <td className="border border-slate-500"><input  onChange={(e)=>{setA5Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.a5}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setA6Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.a6}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setA7Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.a7}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setA8Card1(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card1.a8}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setA9Card1(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card1.a9}/></td>
   </tr>
   <tr>
   <td className="border border-slate-500"><input onChange={(e)=>{setB1Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.b1}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setB2Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.b2}/></td>
   <td className="border border-slate-500"><input  onChange={(e)=>{setB3Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.b3}/></td>
   <td className="border border-slate-500"><input  onChange={(e)=>{setB4Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.b4}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setB5Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.b5}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setB6Card1(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card1.b6}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setB7Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.b7}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setB8Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.b8}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setB9Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.b9}/></td>
   </tr>

   <tr>
   <td className="border border-slate-500"><input onChange={(e)=>{setC1Card1(e.target.value)}} width={25}style={{width:30}} type="text" defaultValue={game_cards[0].card1.c1}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setC2Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.c2}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setC3Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.c3}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setC4Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.c4}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setC5Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.c5}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setC6Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.c6}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setC7Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.c7}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setC8Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.c8}/></td>
   <td className="border border-slate-500"><input onChange={(e)=>{setC9Card1(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card1.c9}/></td>
   </tr>
</tbody>
</table>
<button type="button" style={{marginTop:10}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{updateCard1()}}>Save table - <h3>{6*(Number(setId)-1)+1}</h3> </button>
</div>
                           











                          <div  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <table style={{maxWidth:100,width:100}}  className="border-collapse border border-slate-500 table-auto">
                                <tbody>
                                <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA1Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.a1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA2Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.a2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA3Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.a3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA4Card2(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card2.a4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA5Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.a5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA6Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.a6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA7Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.a7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA8Card2(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card2.a8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA9Card2(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card2.a9}/></td>
                                    </tr>
                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB1Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.b1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB2Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.b2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB3Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.b3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB4Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.b4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB5Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.b5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB6Card2(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card2.b6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB7Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.b7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB8Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.b8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB9Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.b9}/></td>
                                    </tr>

                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC1Card2(e.target.value)}} width={25}style={{width:30}} type="text" defaultValue={game_cards[0].card2.c1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC2Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.c2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC3Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.c3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC4Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.c4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC5Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.c5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC6Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.c6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC7Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.c7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC8Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.c8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC9Card2(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card2.c9}/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" style={{marginTop:10}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{updateCard2()}}>Save table - <h3>{6*(Number(setId)-1)+2}</h3> </button>
                            </div>









                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <table style={{maxWidth:100,width:100}}  className="border-collapse border border-slate-500 table-auto">
                             
                                <tbody>
                                <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA1Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.a1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA2Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.a2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA3Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.a3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA4Card3(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card3.a4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA5Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.a5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA6Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.a6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA7Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.a7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA8Card3(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card3.a8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA9Card3(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card3.a9}/></td>
                                    </tr>
                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB1Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.b1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB2Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.b2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB3Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.b3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB4Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.b4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB5Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.b5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB6Card3(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card3.b6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB7Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.b7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB8Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.b8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB9Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.b9}/></td>
                                    </tr>

                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC1Card3(e.target.value)}} width={25}style={{width:30}} type="text" defaultValue={game_cards[0].card3.c1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC2Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.c2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC3Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.c3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC4Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.c4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC5Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.c5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC6Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.c6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC7Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.c7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC8Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.c8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC9Card3(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card3.c9}/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" style={{marginTop:10}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{updateCard3()}}>Save table - <h3>{6*(Number(setId)-1)+3}</h3> </button>
                            </div>







                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <table style={{maxWidth:100,width:100}}  className="border-collapse border border-slate-500 table-auto">
                           
                                <tbody>
                                <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA1Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.a1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA2Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.a2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA3Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.a3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA4Card4(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card4.a4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA5Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.a5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA6Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.a6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA7Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.a7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA8Card4(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card4.a8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA9Card4(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card4.a9}/></td>
                                    </tr>
                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB1Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.b1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB2Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.b2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB3Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.b3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB4Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.b4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB5Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.b5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB6Card4(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card4.b6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB7Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.b7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB8Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.b8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB9Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.b9}/></td>
                                    </tr>

                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC1Card4(e.target.value)}} width={25}style={{width:30}} type="text" defaultValue={game_cards[0].card4.c1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC2Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.c2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC3Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.c3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC4Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.c4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC5Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.c5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC6Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.c6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC7Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.c7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC8Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.c8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC9Card4(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card4.c9}/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" style={{marginTop:10}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{updateCard4()}}>Save table - <h3>{6*(Number(setId)-1)+4}</h3> </button>
                            </div>






                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <table style={{maxWidth:100,width:100}}  className="border-collapse border border-slate-500 table-auto">
                                <tbody>
                                <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA1Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.a1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA2Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.a2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA3Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.a3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA4Card5(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card5.a4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA5Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.a5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA6Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.a6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA7Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.a7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA8Card5(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card5.a8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA9Card5(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card5.a9}/></td>
                                    </tr>
                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB1Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.b1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB2Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.b2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB3Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.b3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB4Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.b4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB5Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.b5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB6Card5(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card5.b6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB7Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.b7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB8Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.b8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB9Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.b9}/></td>
                                    </tr>

                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC1Card5(e.target.value)}} width={25}style={{width:30}} type="text" defaultValue={game_cards[0].card5.c1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC2Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.c2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC3Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.c3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC4Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.c4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC5Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.c5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC6Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.c6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC7Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.c7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC8Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.c8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC9Card5(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card5.c9}/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" style={{marginTop:10}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{updateCard5()}}>Save table - <h3>{6*(Number(setId)-1)+5}</h3> </button>
                            </div>








                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <table style={{maxWidth:100,width:100}}  className="border-collapse border border-slate-500 table-auto">
                                <tbody>
                                <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA1Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.a1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA2Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.a2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA3Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.a3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA4Card6(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card6.a4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA5Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.a5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA6Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.a6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA7Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.a7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA8Card6(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card6.a8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setA9Card6(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card6.a9}/></td>
                                    </tr>
                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB1Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.b1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB2Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.b2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB3Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.b3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB4Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.b4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB5Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.b5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB6Card6(e.target.value)}} width={25}  style={{width:30}} type="text" defaultValue={game_cards[0].card6.b6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB7Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.b7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB8Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.b8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setB9Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.b9}/></td>
                                    </tr>

                                    <tr>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC1Card6(e.target.value)}} width={25}style={{width:30}} type="text" defaultValue={game_cards[0].card6.c1}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC2Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.c2}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC3Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.c3}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC4Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.c4}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC5Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.c5}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC6Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.c6}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC7Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.c7}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC8Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.c8}/></td>
                                    <td className="border border-slate-500"><input onChange={(e)=>{setC9Card6(e.target.value)}} width={25} style={{width:30}} type="text" defaultValue={game_cards[0].card6.c9}/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" style={{marginTop:10}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{updateCard6()}}>Save table - <h3>{6*(Number(setId)-1)+6}</h3> </button>
                            </div>
                        </div>
                              
                            
                      ):""
                    }
                </div>
            </DefaultLayout>
           
        );
    }

    export default Cards;