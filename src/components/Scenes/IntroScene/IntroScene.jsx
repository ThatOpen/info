import React from "react";
import {BasicScene} from "../BasicScene/BasicScene";
import {Scene} from "three";
import {getIFCPath} from "../../../utils/ifcPathFinder";
import BrowserOnly from '@docusaurus/BrowserOnly';
import {getWasmPath} from "../../../utils/ifcWasmFinder";

export const IntroScene = (props) => {
    return (
        <BrowserOnly
            fallback={<div>3D scene with IFC model</div>}>
            {() => {
                const scene = new Scene();
                const IFCLoader = require("web-ifc-three/IFCLoader.js").IFCLoader;
                const loader = new IFCLoader();
                const ifcPath = getIFCPath();
                const wasmPath = getWasmPath();
                if (wasmPath) loader.ifcManager.setWasmPath(wasmPath);
                let isLoaded = false;

                const loadIfc = () => {
                    if(isLoaded) return;
                    loader.load(ifcPath + "01.ifc", (ifcModel) => scene.add(ifcModel.mesh));
                    isLoaded = true;
                }

                return (
                    <div>
                        <button onClick={loadIfc}>Open</button>
                        <BasicScene scene={scene}/>
                    </div>)
            }}
        </BrowserOnly>
    );
}