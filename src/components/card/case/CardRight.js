import classes from "./CardRight.module.css";

const CardRight = (props) => {

    const {children} = props;
    
    return <div className={classes["main-div"]}>
        {children}
    </div>
}

export default CardRight;