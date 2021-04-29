import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../redux_store";

//ACs Types
export type PropertyTypes<AT> = AT extends { [key: string]: infer T; } ? T : never;
export type InferActionTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertyTypes<T>>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R,AppStateType,unknown,A>