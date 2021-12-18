
const List = (props) => {

    const names = props.userlist;
    const doubleName1 = props.doubleName;
    const emptyValue1 = props.emptyValue;


    return (
         <ul className="list-group names mx-auto " >   

            {names.map(({ id, value }) => {
            return (                             

                        <div className="collection-names" key={id}>   
                            <li  className="list-group-item d-flex justify-content-between align-items-center my-1" >
                                <span>
                                    {value}
                                </span>
                                <i className="far fa-smile head">
                                </i>
                            </li>                                                                                   
                                                            
                        </div>
                     )
            })
            }

            <h3 className="mb-4">{doubleName1}</h3>
            <h3 className="mb-4">{emptyValue1}</h3>

                                                
        </ul>
     

    );
}

export default List;
