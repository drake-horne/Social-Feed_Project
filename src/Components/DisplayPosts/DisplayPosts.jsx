import './styles.css'
const DisplayPosts = (props) => {
    return (
        
        <body>
            <h1>Other posts</h1>
            <table>
                <tbody>
                {props.parentEntries.map((entry, index) =>{

                    return(
                    <tr>
                        
                        <th style={{color: "blue"}}>Name
                            <td style={{color: "black"}}>{entry.name}</td>
                        </th>
                        <th style={{color: "blue"}}> Post  
                            <td style={{'text-align': "center"}}>{entry.post}</td>
                        </th> 
                    </tr>    

                    );
                    }
                    )}
                    
                </tbody>
            </table>
        </body>    
    )   
}

export default DisplayPosts