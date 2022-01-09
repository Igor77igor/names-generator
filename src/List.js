
import { DragDropContext,Droppable,Draggable } from "react-beautiful-dnd";


const List = (props) => {

    const names = props.userlist;    
    const setNames = props.setUserlist;
    const doubleNameMessage = props.doubleName;
    const emptyValueMessage = props.emptyValue;
    const deleteName=props.deleteName;
    

    function handleOnDragEnd(result) {
                if (!result.destination) return;                
                const items = Array.from(names);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);
                setNames(items);      
                }

    return (
        <div>
        
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
                                                    <li  className="list-group-item d-flex justify-content-between align-items-center  my-1 " 
                                                    ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} >

                                                        <span>
                                                            {value}                                                                                                              
                                                        </span>
                                                         
                                                        <i onClick={()=>{deleteName(id)}} className="far fa-trash-alt delete">
                                                        </i> 
                                                                                                    
                                                    </li>    
                                                )}
                                            </Draggable>     
                                                                                                                    
                                                                            
                                        </div>
                                    )
                                })
                            }                                                               
                                        
                            {provided.placeholder}  
                        </ul>                    
                    )}
                </Droppable>
            </DragDropContext>    
            
            <h3 className="mb-4 fst-italic">{doubleNameMessage}</h3>
            <h3 className="mb-4 fst-italic">{emptyValueMessage}</h3> 

         </div>         

    );
}

export default List;

 
        