
import { DragDropContext,Droppable,Draggable } from "react-beautiful-dnd";


const List = (props) => {

    const names = props.userlist;    
    const setNames = props.setUserlist;
    const doubleName1 = props.doubleName;
    const emptyValue1 = props.emptyValue;


    function handleOnDragEnd(result) {
                if (!result.destination) return;
                console.log(result);
                const items = Array.from(names);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);
                setNames(items);      
                }

    return (

        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="names">
                {(provided) => (
                    <ul className="list-group names mx-auto " 
                    {...provided.droppableProps} ref={provided.innerRef}>   

                        {names.map(({ id, value }, index) => {
                        return (                             

                                    <div key={id} className="collection-names" >  
                                        <Draggable key={id} draggableId={id} index={index} >
                                            {(provided) => (                                               
                                                <li  className="list-group-item d-flex justify-content-between align-items-center my-1" 
                                                {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                                                    <span>
                                                        {value}
                                                    </span>
                                                    <i className="far fa-smile head">
                                                    </i>
                                                </li>    
                                            )}
                                        </Draggable>                                                                                
                                                                        
                                    </div>
                                )
                        })
                        }

                        <h3 className="mb-4">{doubleName1}</h3>
                        <h3 className="mb-4">{emptyValue1}</h3>

                        {provided.placeholder} 

                    </ul>
                )}
            </Droppable>
        </DragDropContext>
     

    );
}

export default List;

 
        


// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { useState } from 'react';

// const List = (props) => {

//     const names = props.userlist;
//     const doubleName1 = props.doubleName;
//     const emptyValue1 = props.emptyValue;



//     const [characters, updateCharacters] = useState(names);



//     function handleOnDragEnd(result) {
//         // if (!result.destination) return;
//         console.log(result);
//         const items = Array.from(characters);
//         const [reorderedItem] = items.splice(result.source.index, 1);
//         items.splice(result.destination.index, 0, reorderedItem);
//         updateCharacters(items);


//     }


//     return (

//         <DragDropContext onDragEnd={handleOnDragEnd}>
//             <Droppable droppableId="characters">
//                 {(provided) => (

//                     <ul className="list-group names mx-auto " {...provided.droppableProps} ref={provided.innerRef}>

//                         {names.map(({ id, value }, index) => {
//                             return (

//                                 <div className="collection-names">

//                                     <Draggable key={id} draggableId={id} index={index} >
//                                         {(provided) => (
//                                             <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
//                                                 className="list-group-item d-flex justify-content-between align-items-center my-1">
//                                                 <span>{value}  </span>
//                                                 <i className="far fa-smile head"></i>
//                                             </li>
//                                         )}

//                                     </Draggable>

//                                 </div>
//                             )
//                         })
//                         }


//                         <h3 className="mb-4">{doubleName1}</h3>
//                         <h3 className="mb-4">{emptyValue1}</h3>

//                         {provided.placeholder}
//                     </ul >
//                 )}
//             </Droppable>

//         </DragDropContext>






//     );
// }

// export default List;

