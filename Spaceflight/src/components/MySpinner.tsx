import Spinner from "react-bootstrap/Spinner";

function MySpinner() {
	return (
		<Spinner
			animation="grow"
			className="  position-absolute top-50 start-50 "
			style={{ width: "4rem", height: "4rem" }}
		/>
	);
}

export default MySpinner;
