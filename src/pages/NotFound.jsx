import React from "react";
import Layout from "../template/Layout";
import Navbar from './../template/Navbar';


const NotFound = () => {
    return (
        <Layout>
          <section>
          <h1 className="flex">ไม่พบหน้านี้</h1>
          <a className="text-xl text bg-red-500 "href="/" >กลับมาหน้าหลัก</a>
          </section>
         
       
         
        
        </Layout>
      );
    };
    
    export default NotFound;
    