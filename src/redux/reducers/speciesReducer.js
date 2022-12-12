import {ADD_WIDGET_ITEM, ADD_WIDGET_LOADER} from '../actions/types';
import { mapSpeciesModel } from '../../utils';

const initialState = {
    loading: false,
    species: [],
    speciesCount: 0
}

export default function speciesReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_WIDGET_ITEM: {
            const {result, count} = action.payload;
            let species = result.map(el => mapSpeciesModel(el));
            let speciesCount = count;
          
            return {
                ...state,
                species,
                speciesCount
            }
        }

        case ADD_WIDGET_LOADER: {
            const data = action.payload;
            let loading = data;
            return {
                ...state,
                loading
            }
        }

    default:
        return state;
    }
}