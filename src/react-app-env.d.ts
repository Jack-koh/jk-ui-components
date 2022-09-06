// import N_Accordion1 from "lib/module/lib/accordion/model";
/// <reference types="react-scripts" />

declare type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T];
