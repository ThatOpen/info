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
                loader.load(ifcPath + "01.ifc", (ifcModel) => scene.add(ifcModel.mesh));

                return (
                    <div className={"collapsible-scene"}>
                        <BasicScene scene={scene}/>
                    </div>)
            }}
        </BrowserOnly>
    );
}