import '../rightbar/rightBar.css';

import Message from '../message/Message';
import FirendReqe from '../firendrequest/FirendReqe';


export default function RightBar() {
    return (
        <div className="rightBar">
            <div className="rightbar-container">
                <Message />
                <FirendReqe/>
            </div>
        </div>
    );
}
