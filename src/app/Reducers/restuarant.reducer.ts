
import { Restuarant } from '../Models/restuarant.model'
import * as RestuarantActions from './../Actions/restuarant.actions'


export const InitialState : Restuarant[] = [{
    id: 111,
    name: "test",
    category: ['chinese', 'Pizza', 'Fastfood'],
    type: 'Veg',
    location: 'Surat',
    price: 560,
    rating: 5,
    createdOn: new Date,
    imgUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-08a68b9418adeb6c8599892284a22ef1_screen.jpg?ts=1599559226'
}, {
    id: 222,
    name: "test2",
    category: ['South Indian', "chinese"],
    type: 'non-Veg',
    location: 'Ahmedabad',
    price: 560,
    rating: 5,
    createdOn: new Date,
    imgUrl: 'https://anantacreative.com/wp-content/uploads/2020/10/Restaurant-Logo1.png'
},
{
    id: 333,
    name: "test2",
    category: ['punjabi'],
    type: 'non-Veg',
    location: 'Ahmedabad',
    price: 560,
    rating: 5,
    createdOn: new Date,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPg03467KIRBvfrAqDBBF1aVrxSOXvV-Cog&usqp=CAU'
}]


export function restuarantReducer(state: Restuarant[] = InitialState, action: RestuarantActions.Actions){
   switch (action.type) {
        case RestuarantActions.RestuarantActionTypes.LOAD_RESTUARANTS: 
            return state;
        case RestuarantActions.RestuarantActionTypes.ADD_RESTUARANT:{
            return[...state, action.payload] ;
        }  
        case RestuarantActions.RestuarantActionTypes.REMOVE_RESTUARANT:{
            const curState = [...state];
            curState.splice(action.payload, 1);
            return curState
        }  
        case RestuarantActions.RestuarantActionTypes.VEG_RESTUARANT:{
            const vegRestuarant = state.filter((restuarant) => restuarant.type.toLowerCase() == 'veg')
            return vegRestuarant
        }    
        
        case RestuarantActions.RestuarantActionTypes.NONVEG_RESTUARANT:{
            const nonVegRestuarant = state.filter((restuarant) => restuarant.type.includes('non'))
            return nonVegRestuarant
        }
        case RestuarantActions.RestuarantActionTypes.SEARCH_RESTUARANT:{
            const filter = [(action.payload).toLowerCase()];
            const filterByCategory = new Set(filter);
            const result = state.filter((o) => o.category.some((category)=> filterByCategory.has(category.toLowerCase())) )
            return result
        }
        default: { 
            return state;
        }
    }
}

