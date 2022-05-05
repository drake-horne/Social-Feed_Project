import './styles.css';
import * as React from "react";
import  {render} from "react-dom";
import c from "classnames";
//import "./styles.css";

const DisplayPosts = (props) => {
    return (
        
        <body>
            <h1>Other posts</h1>
            <table>
                <tbody>
                {props.parentEntries.map((entry, index) =>{

                    return(
                    <div className='row'>    
                    <tr>
                        
                        <th style={{color: "blue", textDecoration: 'underline'}}>Name
                            <td className='name'style={{color: "black"}}>{entry.name}</td>
                        </th>
                        <th style={{textDecoration: 'underline'}}> Post  
                            <td className='post'>{entry.post}</td>
                        </th>
                        <Post/> 
                    </tr> 
                    </div>   

                    );
                    }
                    )}
                    
                </tbody>
            </table>
        </body>    
    )   
}


class Post extends React.Component {
  state = {
    like: 0,
    dislike: 0,
    likeActive: false,
    dislikeActive: false
  };
  

  setDislike() {
    this.setState({
      dislikeActive: !this.state.dislikeActive,
      dislike: this.state.dislikeActive
        ? this.state.dislike - 1
        : this.state.dislike + 1
    });
  }
  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
    });
  }

  handleLike() {
    if (this.state.dislikeActive) {
      this.setLike();
      this.setDislike();
    }
    this.setLike();
  }

  handleDislike() {
    if (this.state.likeActive) {
      this.setDislike();
      this.setLike();
    }
    this.setDislike();
  }

  render() {
    return (
      <>
        <button 
          onClick={() => this.handleLike()}
          className={c({ ["active"]: this.state.likeActive })}
        > 
          Likes {this.state.like}
        </button>
        <button
          className={c({ ["active"]: this.state.dislikeActive })}
          onClick={() => this.handleDislike()}
        > 
          Dislikes {this.state.dislike}
        </button>
      </>
    );
  }}


export default DisplayPosts