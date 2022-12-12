import {ADD_WIDGET_ITEM, ADD_WIDGET_LOADER} from "./types";

export const addWidgetItem = (payload) => ({type: ADD_WIDGET_ITEM, payload});

export const addWidgetLoader = (payload) => ({type: ADD_WIDGET_LOADER, payload});