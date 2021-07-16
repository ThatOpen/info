import React from "react";
import {BasicScene} from "../BasicScene/BasicScene";
import { IFCLoader } from "web-ifc-three/IFCLoader";
import {Scene} from "three";

export const IntroScene = (props) => {

    const scene = new Scene();
    const loader = new IFCLoader();
    loader.load("../IFC/01.ifc", (ifcModel) => scene.add(ifcModel.mesh));

    return <BasicScene scene={scene}/>
}