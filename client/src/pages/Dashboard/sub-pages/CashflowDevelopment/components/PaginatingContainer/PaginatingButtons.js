import Spacers from "./fabs/Spacers"
import Fabs from "./fabs/Fabs"

const PaginatingButtons = (props) => {

    const iconContainer = {
        style: {
            width: "100%",
            display: "flex",
            marginTop: "20px", 
            justifyContent: "space-evenly"
        }
    }

    return (
        <div {...iconContainer} >
            <Fabs {...props} />
            <Spacers />
        </div>
    )
}

export default PaginatingButtons