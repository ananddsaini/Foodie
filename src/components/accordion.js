import { useState } from "react";
const First = () => {
    return (
        <>

            <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
        </>
    )
}

function Accordion() {
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(true);

    return (
        <div>
            <h1>First</h1>
            {
                isVisible ? (<button onClick={
                    () => {
                        setIsVisible(false);
                        if(!isVisible2 || !isVisible3){setIsVisible2(true);
                        setIsVisible3(true)}
                        
                        
                    }

                }>Show</button>)
                    : (<button onClick={() => setIsVisible(true)}>Hide</button>)
            }
            {!isVisible && (<First />)}
            <h1>Second</h1>
            {
                isVisible2 ? (<button onClick={() => {setIsVisible2(false);
                    if(!isVisible || !isVisible3){setIsVisible(true);
                        setIsVisible3(true)}


                  }}>Show</button>)
                    : (<button onClick={() => setIsVisible2(true)}>Hide</button>)
            }
            {!isVisible2 && (<First />)}
            <h1>Third</h1>
            {
                isVisible3 ? (<button onClick={() => {setIsVisible3(false);
                    if(!isVisible2 || !isVisible){setIsVisible2(true);
                        setIsVisible(true)}

                   }}>Show</button>)
                    : (<button onClick={() => setIsVisible3(true)}>Hide</button>)
            }
            {!isVisible3 && (<First />)}
        </div>)
}
export default Accordion;