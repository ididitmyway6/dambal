"use client"
import React from "react";
import FormElements from "@/components/FormElements";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { getDatabase,ref,onValue ,limitToFirst , equalTo,orderByChild,orderByValue, set ,update,push, query,limitToLast} from "firebase/database";
import { useSearchParams } from "next/navigation";


const Select = ()=>
    {
        const params = useSearchParams();
        var matchId = params.get("mid");
        const[selectedNumber,setSelectedNumber] = useState("");
        const[youtubeVideoId,setYoutubeVideoId] = useState("");

        function checkForWinnerSet(setId:string , mid)
        {
            var x : Array<string>=[];
            const db = getDatabase();
            const qry = query(ref(db,"winning_metadata/"+mid+"/sets/"+setId),orderByChild("slot"));
            onValue(qry,s=>{
                x=[];
                if(s.size>0)
                    {
                       s.forEach(ss=>{
                        ss.forEach(sss=>{
                            
                            x.push(sss.val());
                        });
                       });
                    }
                    if(x.includes("card1-a1")&&x.includes("card1-a2")&&x.includes("card1-a3")&&x.includes("card1-a4")&&x.includes("card1-a5")&&x.includes("card1-a6")&&x.includes("card1-a7")&&x.includes("card1-a8")&&x.includes("card1-a9"))
                        {
                            //alert("winner");
                        }
                    if(x.includes("card1-b1")&&x.includes("card1-b2")&&x.includes("card1-b3")&&x.includes("card1-b4")&&x.includes("card1-b5")&&x.includes("card1-b6")&&x.includes("card1-b7")&&x.includes("card1-b8")&&x.includes("card1-b9"))
                        {
                            //alert("winner");
                        }
                        if(x.includes("card1-c1")&&x.includes("card1-c2")&&x.includes("card1-c3")&&x.includes("card1-c4")&&x.includes("card1-c5")&&x.includes("card1-c6")&&x.includes("card1-c7")&&x.includes("card1-c8")&&x.includes("card1-c9"))
                        {
                            //alert("winner");
                        }
                        if(x.includes("card2-a1")&&x.includes("card2-a2")&&x.includes("card2-a3")&&x.includes("card2-a4")&&x.includes("card2-a5")&&x.includes("card2-a6")&&x.includes("card2-a7")&&x.includes("card2-a8")&&x.includes("card2-a9"))
                        {
                            //alert("winner");
                        }
                    if(x.includes("card2-b1")&&x.includes("card2-b2")&&x.includes("card2-b3")&&x.includes("card2-b4")&&x.includes("card2-b5")&&x.includes("card2-b6")&&x.includes("card2-b7")&&x.includes("card2-b8")&&x.includes("card2-b9"))
                        {
                            //alert("winner");
                        }
                        if(x.includes("card2-c1")&&x.includes("card2-c2")&&x.includes("card2-c3")&&x.includes("card2-c4")&&x.includes("card2-c5")&&x.includes("card2-c6")&&x.includes("card2-c7")&&x.includes("card2-c8")&&x.includes("card2-c9"))
                        {
                            //alert("winner");
                        }
                    if(x.includes("card3-a1")&&x.includes("card3-a2")&&x.includes("card3-a3")&&x.includes("card3-a4")&&x.includes("card3-a5")&&x.includes("card3-a6")&&x.includes("card3-a7")&&x.includes("card3-a8")&&x.includes("card3-a9"))
                        {
                            //alert("winner");
                        }
                    if(x.includes("card3-b1")&&x.includes("card3-b2")&&x.includes("card3-b3")&&x.includes("card3-b4")&&x.includes("card3-b5")&&x.includes("card3-b6")&&x.includes("card3-b7")&&x.includes("card3-b8")&&x.includes("card3-b9"))
                        {
                            //alert("winner");
                        }
                        if(x.includes("card3-c1")&&x.includes("card3-c2")&&x.includes("card3-c3")&&x.includes("card3-c4")&&x.includes("card3-c5")&&x.includes("card3-c6")&&x.includes("card3-c7")&&x.includes("card3-c8")&&x.includes("card3-c9"))
                        {
                            //alert("winner");
                        }

                     if(x.includes("card4-a1")&&x.includes("card4-a2")&&x.includes("card4-a3")&&x.includes("card4-a4")&&x.includes("card4-a5")&&x.includes("card4-a6")&&x.includes("card4-a7")&&x.includes("card4-a8")&&x.includes("card4-a9"))
                        {
                            //alert("winner");
                        }
                    if(x.includes("card4-b1")&&x.includes("card4-b2")&&x.includes("card4-b3")&&x.includes("card4-b4")&&x.includes("card4-b5")&&x.includes("card4-b6")&&x.includes("card4-b7")&&x.includes("card4-b8")&&x.includes("card4-b9"))
                        {
                            //alert("winner");
                        }
                        if(x.includes("card4-c1")&&x.includes("card4-c2")&&x.includes("card4-c3")&&x.includes("card4-c4")&&x.includes("card4-c5")&&x.includes("card4-c6")&&x.includes("card4-c7")&&x.includes("card4-c8")&&x.includes("card4-c9"))
                        {
                            //alert("winner");
                        }
                         if(x.includes("card5-a1")&&x.includes("card5-a2")&&x.includes("card5-a3")&&x.includes("card5-a4")&&x.includes("card5-a5")&&x.includes("card5-a6")&&x.includes("card5-a7")&&x.includes("card5-a8")&&x.includes("card5-a9"))
                        {
                            //alert("winner");
                        }
                    if(x.includes("card5-b1")&&x.includes("card5-b2")&&x.includes("card5-b3")&&x.includes("card5-b4")&&x.includes("card5-b5")&&x.includes("card5-b6")&&x.includes("card5-b7")&&x.includes("card5-b8")&&x.includes("card5-b9"))
                        {
                            //alert("winner");
                        }
                        if(x.includes("card5-c1")&&x.includes("card5-c2")&&x.includes("card5-c3")&&x.includes("card5-c4")&&x.includes("card5-c5")&&x.includes("card5-c6")&&x.includes("card5-c7")&&x.includes("card5-c8")&&x.includes("card5-c9"))
                        {
                            //alert("winner");
                        }

                      if(x.includes("card6-a1")&&x.includes("card6-a2")&&x.includes("card6-a3")&&x.includes("card6-a4")&&x.includes("card6-a5")&&x.includes("card6-a6")&&x.includes("card6-a7")&&x.includes("card6-a8")&&x.includes("card6-a9"))
                        {
                            //alert("winner");
                        }
                    if(x.includes("card6-b1")&&x.includes("card6-b2")&&x.includes("card6-b3")&&x.includes("card6-b4")&&x.includes("card6-b5")&&x.includes("card6-b6")&&x.includes("card6-b7")&&x.includes("card6-b8")&&x.includes("card6-b9"))
                        {
                            //alert("winner");
                        }
                        if(x.includes("card6-c1")&&x.includes("card6-c2")&&x.includes("card6-c3")&&x.includes("card6-c4")&&x.includes("card6-c5")&&x.includes("card6-c6")&&x.includes("card6-c7")&&x.includes("card6-c8")&&x.includes("card6-c9"))
                        {
                            //alert("winner");
                        }

            });
        }

        function registerWinningMetadata(setId:string,collectedSlot:string,cardId:string)
        {
            const db = getDatabase();
            set(push(ref(db,"winning_metadata/"+matchId+"/sets/"+setId)),{
                slot:cardId+"-"+collectedSlot
            });
        }


        function selectNumber()
        {
            var x= "";
            const db = getDatabase();
            const q = query(ref(db,"matches/"+matchId+"/setsOptions/sets/"),limitToFirst(150)) ;
            onValue(q,snapshot=>{
               snapshot.forEach(ss=>{
                //ss -> setId
                ss.forEach(snp=>{
                    //snp -> card id
                   snp.forEach(lastSnapshot=>{
                    if(selectedNumber==lastSnapshot.val())
                        {
                            alert( ss.key+"/"+snp.key+"/"+lastSnapshot.key+"/");
                            registerWinningMetadata(ss.key,lastSnapshot.key,snp.key);
                            checkForWinnerSet(ss.key,matchId);
                           
                        }
                   });
                });
               });
            });
            
        }


        return(
            <DefaultLayout>
                <div>
                    <div><p>Enter Random Number</p></div>
                <input onChange={(e)=>{setSelectedNumber(e.target.value)}} type="text" />
                <button onClick={()=>{selectNumber();}}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Select Number</button>
                </div>
                <div>
                    <div><p>Enter Youtube Livestream Video Id</p></div>
                    <input onChange={(e)=>{setYoutubeVideoId(e.target.value)}} />
                </div>
                <div>
                <iframe style={{width:900,height:500}} className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${youtubeVideoId}?autoplay=0`}>
</iframe>
                </div>
            </DefaultLayout>
        )
    }
    export default Select;
