import { TbFaceIdError, TbError404 } from 'react-icons/tb'; 
import { BiError } from "react-icons/bi";

const Error404 = () => {

	return (
		<div className="page-error container justify-content-center p-5">
			<div className="p-5 d-flex flex-column align-items-center">
				<BiError size="100" />
			<TbError404 size="200" />

			</div>
		</div>
	)
}

export default Error404