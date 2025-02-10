"use client";

import Head from "next/head";

export default function Store() {
  return (
    <div className="min-h-screen bg-[#081211] text-white flex items-center justify-center">
      <Head>
        <title>Circle of Intimacy Store</title>
        <meta
          name="description"
          content="Browse our selection of shirts and merchandise."
        />
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4">Store</h1>
        <p className="text-lg text-gray-400">Work in progress...</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfJTZwqahy2SJGWLvbAopuZSipSPDcCsYYtk22GgP002Unm7g/viewform"
          target="_blank"
        >
          <p className="font-bold underline">Merch order form </p>
        </a>
      </div>
    </div>
  );
}
