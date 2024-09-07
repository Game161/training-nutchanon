import React from "react";
import Layout from "../template/Layout";


const Course = () => {
    return (
        <Layout>
            <section className="p-20 w-full ">
               <h1 className=" text-red-400 text-5xl font-bold ">หลักสูตรที่เปิดสอน</h1>
               <hr />
                 
            <div class="flex flex-col items-center justify-center max-w-screen-xl mx-auto mt-5">
        <div class="grid grid-cols-4 gap-6">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className=" h-screen bg1 "></div>
                <div class="px-6 py-4">
                    <h2 class="font-bold text-xl ">Basic React Native</h2>
                    <h2 class="font-serif text-sm ">ระยะเวลา(วัน) 5</h2>
                    <h2 class="font-bold text-xl ">ราคา7500บาท</h2>
                </div>
            </div>
            <div class="max-w-xl rounded overflow-hidden shadow-lg bg-white">
            <div className=" h-screen bg2 "></div>
                <div class="px-6 py-4">
                    <h2 class="font-bold text-xl ">Power Bl Dashboard</h2>
                    <h2 class="font-serif text-sm ">ระยะเวลา(วัน) 4</h2>
                    <h2 class="font-bold text-xl ">ราคา5500บาท</h2>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className=" h-screen bg3 "></div>
                <div class="px-6 py-4">
                    <h2 class="font-bold text-xl ">UI Design with figma</h2>
                    <h2 class="font-serif text-sm ">ระยะเวลา(วัน) 3</h2>
                    <h2 class="font-bold text-xl ">ราคา5000บาท</h2>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className=" h-screen bg4 "></div>
                <div class="px-6 py-4">
                    <h2 class="font-bold text-xl ">Cross Platform with Flutter</h2>
                    <h2 class="font-serif text-sm ">ระยะเวลา(วัน) 5</h2>
                    <h2 class="font-bold text-xl ">ราคา6500บาท</h2>
                </div>
            </div>
        </div>
    </div>

            </section>


          
            
        </Layout>
      );
    };
    
    export default Course;