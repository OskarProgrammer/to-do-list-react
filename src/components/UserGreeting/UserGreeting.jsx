import styles from "./UserGreeting.module.css"
import PropTypes from 'prop-types'


function UserGreeting(){
    
    if (new Date().getHours() > 19){
        return(
            <h2> Good Evening! </h2>
        )
        }else{
        return (
            <h2> Good Morning!</h2>
        )
    }

}


export default UserGreeting