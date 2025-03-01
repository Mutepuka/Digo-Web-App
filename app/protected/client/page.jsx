"use client";
import { useUser } from "@clerk/nextjs/dist/types";


//functional component
export default function ClientPage(){
    const {isLoaded,isSignedIn,user}=useUser();

    //if isnt loaded if is signed in
    if(!isLoaded || isSignedIn){
        return null;
    }   
    return (
        <section className="py-5">
          <div className="container">
            <h1 className="fs-2 fw-bold">This is a client-side page</h1>
            <p className="mt-3">You are logged in as {user?.firstName}</p>
          </div>
        </section>
      );
}