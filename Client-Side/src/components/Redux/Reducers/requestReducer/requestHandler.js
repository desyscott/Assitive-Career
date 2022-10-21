
//finding out if the item already exist in the requestItems
export const existingRequestItem=({prevRequestItem,nextRequestItem}) =>{
    return prevRequestItem.find(requestItem=>requestItem.user===nextRequestItem.user)
}

export const handleAddToRequest=({prevRequestItem,nextRequestItem})=>{ 
//if the item to be added to the requestItems already exist we just replace it with new one
    const requestItemExits=existingRequestItem({prevRequestItem,nextRequestItem})
    
    if(requestItemExits){
    return prevRequestItem.map(requestItem=>requestItem.user === requestItemExits.user ? 
                            nextRequestItem:requestItem)
     
    }  
//or else  if the item new and don't exist in our requestItems
  return [
      ...prevRequestItem, 
        nextRequestItem,
        ]
}





// export const handleRemoveFromRequest=({prevRequestItem,requestItemToRemove})=>{
//     //filter out the user whose id is equal to the payLoad action id
//     return prevRequestItem.filter(requestItem => requestItem.product !== requestItemToRemove.mentorId);
   
// }

// requestItems:handleRemoveFromRequest({
//     prevRequestItem:state.requestItems,
//     requestItemToRemove:action.payLoad
//  })
