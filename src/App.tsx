import React, {Suspense, useEffect, useMemo, useState} from "react";
import "./App.css";
import {Browser} from "./Browser";
import {Footer} from "./Footer";
import {type RunDef, runDefFromUrl, runDefToUrl} from "./run-def";

function App() {
    let cdRom = "https://dt21q8x1gk8qh.cloudfront.net/BachmanGame.img";
    let machine = "Mac+II";
    let ram = "8M";

    let runDef: RunDef | undefined = runDefFromUrl(
        `http://localhost:3127/run?cdrom=${cdRom}&machine=${machine}&ram=${ram}`
    );

    let contents;
    let footer: React.ReactElement | undefined = <Footer />;
    if (runDef) {
        contents = (
            <Suspense fallback={<div />}>
                <RunDefMac runDef={runDef} onDone={() => {}} />
            </Suspense>
        );
    }

    return <div className="App">{contents}</div>;
}

const RunDefMac = React.lazy(() => import("./RunDefMac"));

export default App;
