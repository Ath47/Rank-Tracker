"use client"; //Any component created in next 13+ are server rendered. So if we want to implement interactivity like onClick, etc.., we need to explicitly convert it to client. This also means we can't use any server functionalities like getServerSession, etc.
import DoubleHeader from "@/components/DoubleHeader";
import { signIn } from "next-auth/react";

export default function LoginScreen() {
  return (
    <div>
      <main className="bg-white mt-8 max-w-md border border-blue-100 border-b-4 mx-auto rounded-xl p-4 py-6 text-center">
        <DoubleHeader preTitle={'Welcome back'} mainTitle={'Login to your Account'} />
        <button
          onClick={() => signIn("google")}
          className="bg-indigo-500 rounded-xl text-white px-6 py-2 border border-indigo-700 border-b-4 inline-flex gap-2 items-center my-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-5 invert"
            src="https://www.svgrepo.com/show/50809/google.svg "
            alt="Google Icon"
          />
          Login with Google
        </button>
      </main>
    </div>
  );
}
