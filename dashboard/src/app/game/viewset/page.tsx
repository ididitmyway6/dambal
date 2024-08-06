"use client"

import React from "react";
import FormElements from "@/components/FormElements";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { getDatabase,ref,onValue ,limitToFirst , equalTo,orderByChild,orderByValue, set ,update, query,limitToLast} from "firebase/database";
import { useSearchParams } from "next/navigation";
import {auth } from '../../../firebase';

const ViewSet = ()=>
    {

    }
    export default ViewSet;